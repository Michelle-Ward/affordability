const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/home_price', (req, res) => {
  res.send();
});

app.get('/all_rates', (req, res) => {
  res.send();
});

app.listen(PORT, () => console.log(`Server listening at localhost: ${PORT}!`));
