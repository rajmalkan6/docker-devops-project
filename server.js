const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

const products = [
  { id: 1, name: "MacBook Air", price: 999 },
  { id: 2, name: "iPhone 15", price: 1099 },
  { id: 3, name: "Apple Watch", price: 399 }
];

app.get("/", (req, res) => {
  res.send("🚀 Welcome to the Product API running in Docker with CI/CD!");
});

app.get("/api/products", (req, res) => {
  res.json(products);
});

app.get("/api/health", (req, res) => {
  res.send("✅ Healthy!");
});

app.listen(port, () => {
  console.log(`Product API listening at http://localhost:${port}`);
});
