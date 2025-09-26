import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Calculadora de Hemoglobina</h1>
      <p>
        La <strong>hemoglobina</strong> es una proteína presente en los glóbulos rojos
        que se encarga de transportar el oxígeno desde los pulmones hacia el resto del cuerpo
        y de llevar el dióxido de carbono de regreso a los pulmones para ser eliminado.
      </p>

      <p>
        Los niveles de hemoglobina son un indicador importante de la salud. Valores bajos
        pueden estar asociados con anemia, mientras que valores altos pueden indicar
        deshidratación u otros problemas médicos.
      </p>

      <p>
        Esta herramienta te permitirá calcular y registrar los niveles de hemoglobina de
        varios pacientes, ayudándote a tener un control rápido y sencillo.
      </p>

      <div style={{ marginTop: "30px", textAlign: "center" }}>
        <button onClick={() => navigate("/calculadora")}>
          Calcular Hemoglobina
        </button>
      </div>
    </div>
  );
}
