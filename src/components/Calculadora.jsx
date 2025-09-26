import { useState, useEffect } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import TablaData from "./TablaData";
import PreguntasForm from "./PreguntasForm";
export default function Calculadora() {
  const [cantidad, setCantidad] = useState(0);
  const [respuestaApi, setRespuestaApi] = useState(0);

  // Inicializar react-hook-form
  const { register, control, handleSubmit, reset } = useForm({
    defaultValues: {
      pacientes: [{ nombre: "", genero: "", hemoglobina: "" }],
    },
  });

  // Manejar arreglo dinámico de pacientes
  const { fields, append, remove } = useFieldArray({
    control,
    name: "pacientes",
  });

  const onSubmit = async (data) => {
    // Transformar los datos del formulario al formato correcto
    const payload = data.pacientes.map((p) => ({
      nombre: p.nombre,
      genero: parseInt(p.genero, 10), // entero
      nivel: parseFloat(p.hemoglobina), // número decimal
    }));

    console.log(payload);

    try {
      const response = await fetch(
        "https://api-hemoglobina.onrender.com/api/Pacientes/procesar",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error(`Error en la petición: ${response.status}`);
      }
      // setRespuestaApi = result;

      // 👇 aquí obtienes la respuesta
      const result = await response.json();

      // 👇 úsalo donde necesites (guardar en state, mostrar tabla, etc.)
      setRespuestaApi(result);

      console.log("✅ Respuesta API:", result);
    } catch (error) {
      console.error("❌ Error c:", error.message);
    }
  };

  // Cada vez que cambia cantidad, actualizamos el arreglo de pacientes
  const handleCantidadChange = (e) => {
    const n = Number(e.target.value) || 0;
    setCantidad(n);

    reset({
      pacientes: Array.from({ length: n }, () => ({
        nombre: "",
        hemoglobina: "",
        genero: "",
      })),
    });
  };

  // Cuando envías el form
  // const onSubmit = (data) => {
  //   console.log("Datos del formulario:", data);
  //   // data.pacientes es un arreglo con cada paciente
  // };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Registro de Pacientes</legend>

          {/* Render dinámico de pacientes */}
          {fields.map((field, index) => (
            <div key={field.id}>
              <PreguntasForm
                index={index}
                register={register}
                remove={remove}
              />
            </div>
          ))}
        </fieldset>

        <button type="submit">Registrar</button>
        <button
          type="button"
          onClick={() => append({ nombre: "", genero: 0, hemoglobina: 0 })}
        >
          ➕ Agregar Paciente
        </button>
      </form>
      <TablaData data={respuestaApi} />.
    </>
  );
}
