import React from "react";
import { useNavigate } from "react-router-dom";
import css from "./Home.module.css";
import { ReactTyped } from "react-typed";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  // Transición base con retraso de 1s
  const transitionBase = { duration: 0.8, ease: "easeInOut", delay: 1 };

  return (
    <div className={css.ctnGeneral}>
      <h1 className={css.titulo}>
        Calculadora{" "}
        <ReactTyped
          strings={[
            "de Hemoglobina",
            "para tu Bienestar",
            "con Resultados Confiables",
          ]}
          typeSpeed={70}
          backSpeed={50}
          backDelay={1500}
          loop
          showCursor={true}
          cursorChar="|"
        />
      </h1>

      <motion.p
        className={css.parrafo}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transitionBase, delay: 1.2 }} // 1s + extra para stagger
      >
        La <strong>hemoglobina</strong> es una proteína presente en los glóbulos
        rojos que transporta oxígeno desde los pulmones hacia el resto del
        cuerpo y lleva el dióxido de carbono de regreso a los pulmones para ser
        eliminado.
      </motion.p>

      <motion.p
        className={css.parrafo}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transitionBase, delay: 1.4 }}
      >
        Los niveles de hemoglobina son un indicador importante de la salud.
        Valores bajos pueden estar asociados con anemia, mientras que valores
        altos pueden indicar deshidratación u otros problemas médicos.
      </motion.p>

      <motion.p
        className={css.parrafo}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ...transitionBase, delay: 1.6 }}
      >
        Esta herramienta te permitirá calcular y registrar los niveles de
        hemoglobina de varios pacientes, ayudándote a tener un control rápido y
        sencillo.
      </motion.p>

      <div className={css.ctnBoton}>
        <motion.button
          className={css.botonPrincipal}
          onClick={() => navigate("/calculadora")}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...transitionBase, delay: 1.8 }}
        >
          Comenzar{" "}
          <ReactTyped
            strings={["tu diagnóstico", "la evaluación", "el análisis"]}
            typeSpeed={60}
            backSpeed={40}
            backDelay={1200}
            loop
            showCursor={false}
          />
        </motion.button>
      </div>
    </div>
  );
}



// import React from "react";
// import { useNavigate } from "react-router-dom";
// import css from './Home.module.css'

// import Typed from "react-typed";

// export default function Home() {
//   const navigate = useNavigate();

//   return (
//    <div className={css.ctnGeneral}>

//       <h1 className={css.titulo}>Calculadora de Hemoglobina</h1>

//       <p className={css.parrafo}>
//         La <strong>hemoglobina</strong> es una proteína presente en los glóbulos rojos
//         que transporta oxígeno desde los pulmones hacia el resto del cuerpo y lleva
//         el dióxido de carbono de regreso a los pulmones para ser eliminado.
//       </p>

//       <p className={css.parrafo}>
//         Los niveles de hemoglobina son un indicador importante de la salud.
//         Valores bajos pueden estar asociados con anemia, mientras que valores altos
//         pueden indicar deshidratación u otros problemas médicos.
//       </p>

//       <p className={css.parrafo}>
//         Esta herramienta te permitirá calcular y registrar los niveles de hemoglobina
//         de varios pacientes, ayudándote a tener un control rápido y sencillo.
//       </p>

//       <div className={css.ctnBoton}>
//         <button className={css.botonPrincipal} onClick={() => navigate("/calculadora")}>
//           Calcular Hemoglobina
//         </button>
//       </div>
//     </div>
//   );
// }
