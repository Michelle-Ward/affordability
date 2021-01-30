const mysql = require('mysql');
const Payments = require('./payments.js');

const createPaymentEntry = (homePrice, hoa) => {
  const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    insecureAuth: true,
  });
  connection.query('CREATE DATABASE IF NOT EXISTS mortgage_payments;', () => {
    Payments.sync()
      .then(() => {
        Payments.create({
          home_price: homePrice,
          hoa,
        })
          .then(() => console.log('data saved!'))
          .catch((err) => console.log(err));
      });
  });
};

for (let i = 0; i < 100; i += 1) {
  const homePrice = Math.floor(Math.random() * (5000000 - 50000) + 500000);
  const hoa = Math.floor((Math.random() * 2));
  createPaymentEntry(homePrice, hoa);
}
