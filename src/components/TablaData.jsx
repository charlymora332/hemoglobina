import React from 'react'

function TablaData({ data }) {
   if (!data) return null;

    return (
    <div>
       <div>
      <h3>Pacientes</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Género</th>
            <th>Nivel</th>
            <th>Alerta</th>
          </tr>
        </thead>
        <tbody>
          {data.pacientes.map((p, index) => (
            <tr key={index}>
              <td>{p.nombre}</td>
              <td>{p.genero}</td>
              <td>{p.nivel}</td>
              <td>{p.alerta}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Totales</h3>
      <table border="1">
        <thead>
          <tr>
            <th>Mujeres Alerta 1</th>
            <th>Mujeres Alerta 2</th>
            <th>Mujeres Sin</th>
            <th>Hombres Alerta 1</th>
            <th>Hombres Alerta 2</th>
            <th>Hombres Sin</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{data.totales.mujeresAlerta1}</td>
            <td>{data.totales.mujeresAlerta2}</td>
            <td>{data.totales.mujeresSin}</td>
            <td>{data.totales.hombresAlerta1}</td>
            <td>{data.totales.hombresAlerta2}</td>
            <td>{data.totales.hombresSin}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default TablaData



