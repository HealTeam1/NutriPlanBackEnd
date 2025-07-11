const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS, // asegúrate que coincida con tu .env
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT), // si tienes puerto personalizado
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('🟢 Conexión a MySQL exitosa');
});

module.exports = db;
