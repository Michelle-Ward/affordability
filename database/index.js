const { Sequelize } = require('sequelize');

const db = new Sequelize('mortgage_payments', process.env.MYSQL_USER, process.env.MYSQL_ROOT_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  port: process.env.MYSQL_PORT,
  define: {
    timestamps: false,
  },
  insecureAuth: true,
});

module.exports = db;
