// controllers/recipesController.js
const db = require('../config/db');

const getRecetas = (req, res) => {
  const sql = 'SELECT * FROM recetas';

  db.query(sql, (err, results) => {
    if (err) {
      console.error('❌ Error al obtener recetas:', err);
      return res.status(500).json({ error: 'Error del servidor' });
    }

    res.status(200).json(results);
  });
};

module.exports = {
  getRecetas,
};
