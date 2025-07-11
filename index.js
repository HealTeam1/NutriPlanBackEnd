require('dotenv').config();
const express = require('express');
const db = require('./db');

const app = express();

app.get('/', (req, res) => {
  db.query('SELECT NOW() AS now', (err, results) => {
    if (err) {
      console.error('Error en consulta:', err);
      return res.status(500).send('Error en consulta');
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
