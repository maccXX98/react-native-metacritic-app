const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

// Habilitar CORS para todas las rutas
app.use(cors());

// Ruta para obtener la lista de juegos
app.get("/api/games", async (req, res) => {
  try {
    // Hacer la solicitud a la API de FreeToGame
    const response = await axios.get("https://www.freetogame.com/api/games");
    // Devolver los datos al cliente
    res.json(response.data);
  } catch (error) {
    // Manejar errores
    res.status(500).json({ error: error.message });
  }
});

// Ruta para obtener detalles de un juego específico
app.get("/api/game/:id", async (req, res) => {
  try {
    // Hacer la solicitud a la API de FreeToGame
    const response = await axios.get(
      `https://www.freetogame.com/api/game?id=${req.params.id}`,
    );
    // Devolver los datos al cliente
    res.json(response.data);
  } catch (error) {
    // Manejar errores
    res.status(500).json({ error: error.message });
  }
});

// Iniciar el servidor en el puerto 3001
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});
