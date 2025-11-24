// Simple CORS proxy for development
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/api', createProxyMiddleware({
  target: 'https://backend.emovere.eu',
  changeOrigin: true,
  pathRewrite: {
    '^/api': '/api',
  },
  onProxyRes: (proxyRes) => {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  },
}));

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`CORS Proxy running on http://localhost:${PORT}`);
});
