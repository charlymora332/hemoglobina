import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import TablaData from "../components/TablaData";
import PreguntasForm from "../components/PreguntasForm";

import { motion, AnimatePresence } from "framer-motion";
import css from "./Calculadora.module.css";
import { procesarPacientes } from "../services/hemoglobina";

export default function Calculadora() {
  const [respuestaApi, setRespuestaApi] = useState(0);


  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { pacientes: [{ nombre: "", genero: "", hemoglobina: "" }] },
  });

  // Manejar arreglo dinámico de pacientes
  const { fields, append, remove } = useFieldArray({
    control,
    name: "pacientes",
  });

 const onSubmit = async (data) => {
    try {
      const result = await procesarPacientes(data.pacientes);
      setRespuestaApi(result);
      console.log("✅ Respuesta API:", result);
    } catch (error) {
      console.error("❌ Error al enviar datos:", error.message);
    }
  };
  return (
    <div className={css.ctnCalculadora}>
      <h2 className={css.tituloForm}>Registro de Pacientes</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={css.form}>
        <div className={css.formWrapper}>
          <AnimatePresence>
            {fields.map((field, index) => (
              <motion.div
                key={field.id}
                layout // 🔹 esto permite que los elementos vecinos se ajusten
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className={css.pacienteContainer}
              >
                <PreguntasForm
                  index={index}
                  register={register}
                  remove={remove}
                  errors={errors}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <div className={css.ctnBotonesForm}>
          <button
            type="button"
            className={css.botonAgregar}
            onClick={() => append({ nombre: "", genero: "", hemoglobina: "" })}
          >
            Agregar Paciente
          </button>

          <button type="submit" className={css.botonSubmit}>
            Registrar
          </button>
        </div>
      </form>
      <TablaData data={respuestaApi} />
    </div>
  );
}
