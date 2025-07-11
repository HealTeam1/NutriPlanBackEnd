require('dotenv').config();
const express = require('express');
const mysql = require('mysql2/promise');

const app = express();

async function main() {
  try {
    const connection = await mysql.createConnection(process.env.DATABASE_URL);

    console.log('Conectado a MySQL correctamente');


    app.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor corriendo en puerto ${process.env.PORT || 3000}`);
    });

  } catch (err) {
    console.error('Error al conectar a MySQL:', err);
  }
}

main();
