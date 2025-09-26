// pacientesService.js

export const procesarPacientes = async (pacientes) => {
  // Transformar los datos al formato correcto
  const payload = pacientes.map((p) => ({
    nombre: p.nombre,
    genero: parseInt(p.genero, 10),
    nivel: parseFloat(p.hemoglobina),
  }));

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

    const result = await response.json();
    return result; // Devuelve la respuesta
  } catch (error) {
    console.error("❌ Error en procesar Pacientes:", error.message);
    throw error; // Re-lanzamos el error para manejarlo en el componente
  }
};
