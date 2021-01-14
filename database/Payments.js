const { DataTypes } = require('sequelize');
const db = require('./index.js');

const Payments = db.define('payments', {
  home_price: DataTypes.BIGINT,
  hoa: DataTypes.BOOLEAN,
});

module.exports = Payments;
