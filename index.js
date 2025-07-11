const express = require('express');
const connectDB = require('./config/db');

const app = express();

async function main() {
  try {
    const connection = await connectDB();

    app.get('/', async (req, res) => {
      try {
        const [rows] = await connection.query('SELECT NOW() AS now');
        res.json(rows);
      } catch (error) {
        res.status(500).send('Error en consulta');
      }
    });

    app.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor corriendo en puerto ${process.env.PORT || 3000}`);
    });

  } catch (err) {
    console.error('Error al conectar a MySQL:', err);
  }
}

main();
