const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: process.env.DB_HOST,       // mainline.proxy.rlwy.net
  port: process.env.DB_PORT,       // 24706
  user: process.env.DB_USER,       // root
  password: process.env.DB_PASS,   // EJqkGGhzELxafamBksrTUfXSsepulXvr
  database: process.env.DB_NAME    // railway
});

connection.connect((err) => {
  if (err) {
    console.error('❌ Error al conectar a MySQL:', err);
    process.exit(1);  // opcional: termina si no hay conexión
  } else {
    console.log('✅ Conectado a MySQL con éxito');
  }
});

module.exports = connection;
