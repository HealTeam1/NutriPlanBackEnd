const db = require('./config/bd');
require('dotenv').config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS, // debe coincidir con tu .env
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('🟢 Conexión a MySQL exitosa');
});

module.exports = db;
