const express = require('express');
const morgan = require('morgan');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

const PORT = 3001;
const HOST = 'localhost';
const API_SERVICE_URL = 'http://localhost:3000';

app.use(morgan('dev'));

app.use('/api/home_price', createProxyMiddleware({
  target: API_SERVICE_URL,
  changeOrigin: true,
}));

app.listen(PORT, HOST, () => {
  console.log(`Starting proxy at ${HOST}:${PORT}`);
});
