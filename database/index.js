const { Sequelize } = require('sequelize');


const db = new Sequelize('mortgage_payments', 'student', 'student', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

module.exports = db;
