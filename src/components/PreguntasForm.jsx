import React from "react";
import css from "./PreguntasForm.module.css";

function PreguntasForm({ index, register, remove, errors }) {
  return (
    <div className={css.ctnPaciente}>
      <h4 className={css.titulo}>Paciente {index + 1}</h4>
      <div className={css.ctnInputs}>
        {/* Nombre */}
        <div className={css.ctnInput}>
          <label htmlFor={`nombre-${index}`} className={css.label}>
            Nombre
          </label>
          <input
            id={`nombre-${index}`}
            {...register(`pacientes.${index}.nombre`, { required: "Nombre requerido" })}
            placeholder="Nombre"
            className={css.input}
          />
          {errors?.pacientes?.[index]?.nombre && (
            <span className={css.error}>{errors.pacientes[index].nombre.message}</span>
          )}
        </div>

        {/* Hemoglobina */}
        <div className={css.ctnInput}>
          <label htmlFor={`hemoglobina-${index}`} className={css.label}>
            Hemoglobina
          </label>
          <input
            id={`hemoglobina-${index}`}
            type="number"
            step="0.1"
            min="0"
            {...register(`pacientes.${index}.hemoglobina`, {
              required: "Nivel de hemoglobina requerido",
              valueAsNumber: true,
              min: { value: 0, message: "Debe ser un número positivo" },
            })}
            placeholder="Ej: 13.5"
            className={css.input}
          />
          {errors?.pacientes?.[index]?.hemoglobina && (
            <span className={css.error}>{errors.pacientes[index].hemoglobina.message}</span>
          )}
        </div>

        {/* Género */}
        <div className={css.ctnInput}>
          <label htmlFor={`genero-${index}`} className={css.label}>
            Género
          </label>
          <select
            id={`genero-${index}`}
            {...register(`pacientes.${index}.genero`, { required: "Género requerido" })}
            className={css.select}
          >
            <option value="">Seleccionar</option>
            <option value="2">Masculino</option>
            <option value="1">Femenino</option>
          </select>
          {errors?.pacientes?.[index]?.genero && (
            <span className={css.error}>{errors.pacientes[index].genero.message}</span>
          )}
        </div>

        {/* Botón eliminar */}
        <button
          type="button"
          onClick={() => remove(index)}
          className={css.btnEliminar}
        >
          ❌
        </button>
      </div>
    </div>
  );
}

export default PreguntasForm;
