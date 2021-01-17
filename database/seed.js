const Payments = require('./payments.js');

const createPaymentEntry = async (homePrice, hoa) => {
  Payments.create({
    home_price: homePrice,
    hoa,
  })
    .then(() => console.log('data saved!'))
    .catch((err) => console.log(err));
  await Payments.sync();
};

for (let i = 0; i < 100; i += 1) {
  const homePrice = Math.floor(Math.random() * (5000000 - 50000) + 500000);
  const hoa = Math.floor((Math.random() * 2));
  createPaymentEntry(homePrice, hoa);
}
