

import React from 'react'
import { useForm, useFieldArray } from "react-hook-form";
import css from "./PreguntasForm.module.css";

function PreguntasForm({index, register,remove}) {
    // const { register, control, handleSubmit, reset } = useForm({
    //   defaultValues: {
    //     pacientes: [],
    //   },
    // });
  return (
    <div>
     
      <h4>Paciente {index + 1}</h4>

      <label>Nombre</label>
      <input {...register(`pacientes.${index}.nombre`)} placeholder="Nombre" />

      <label>Hemoglobina</label>
      <input
        type="number"
        {...register(`pacientes.${index}.hemoglobina`)}
        placeholder="Ej: 13.5"
      />

      <label>Género</label>
      <select {...register(`pacientes.${index}.genero`)}>
        <option value="">Seleccionar</option>
        <option value="2">Masculino</option>
        <option value="1">Femenino</option>
      </select>

      <button type="button" onClick={() => remove(index)}>
        ❌ Eliminar
      </button>
    </div>
   
  )
}

export default PreguntasForm
