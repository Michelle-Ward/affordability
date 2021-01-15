const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { QueryTypes } = require('sequelize');
const db = require('../database/index');

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/api/home_price/:id', async (req, res) => {
  const { id } = req.params;
  // console.log(id)
  await db.query(`SELECT * FROM payments WHERE id=${id}`, {
    type: QueryTypes.SELECT,
  })
    .then((pricing) => res.status(200).send(pricing));
});

app.get('/all_rates', (req, res) => {
  res.send();
});

app.listen(PORT, () => console.log(`Server listening at localhost: ${PORT}!`));
