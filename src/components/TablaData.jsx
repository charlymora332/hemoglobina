import React from "react";
import { motion } from "framer-motion";
import css from "./TablaData.module.css";

function TablaData({ data }) {
  if (!data) return null;

  return (
    <div className={css.ctnGeneral}>
      {/* Sección Totales */}
      <motion.div
        className={css.ctnSeccion}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className={css.tituloSeccion}>Totales</h3>
        <table className={css.tabla}>
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
            <motion.tr
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <td>{data.totales.mujeresAlerta1}</td>
              <td>{data.totales.mujeresAlerta2}</td>
              <td>{data.totales.mujeresSin}</td>
              <td>{data.totales.hombresAlerta1}</td>
              <td>{data.totales.hombresAlerta2}</td>
              <td>{data.totales.hombresSin}</td>
            </motion.tr>
          </tbody>
        </table>
      </motion.div>

      {/* Sección Pacientes */}
      <motion.div
        className={css.ctnSeccion}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h3 className={css.tituloSeccion}>Pacientes</h3>
        <table className={css.tabla}>
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
              <motion.tr
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, backgroundColor: "rgba(0,0,0,0.03)" }}
              >
                <td>{p.nombre}</td>
                <td>{p.genero}</td>
                <td>{p.nivel}</td>
                <td>{p.alerta}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

export default TablaData;
