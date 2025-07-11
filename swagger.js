const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'NutriPlan API',
      version: '1.0.0',
      description: 'Documentación de la API para NutriPlan',
    },
    servers: [
      {
        url: process.env.BASE_URL || 'http://localhost:3000/api',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);
module.exports = swaggerSpec;
