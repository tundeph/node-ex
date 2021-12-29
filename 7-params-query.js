const express = require("express");
//const { identity } = require("lodash");
const app = express();
const { products } = require("./content/subfolder/data");

app.get("/", (req, res) => {
  res.json(products);
});

app.get("/api/products/:productID", (req, res) => {
  const { productID } = req.params;

  const singleProduct = products.find(
    (product) => product.id === Number(productID)
  );
  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }
  return res.json(singleProduct);
});

app.get("/api/all/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, title } = product;
    return { id, name, title };
  });
  res.json(newProducts);
});

app.get("/api/sort/products/query", (req, res) => {
  let sortedProducts = [...products];
  const { name, limit } = req.query;

  if (name) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.toLowerCase().indexOf(name.toLowerCase()) !== -1;
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  return res.status(200).json({ success: true, data: sortedProducts });
});

app.get("/api/products/:productID/reviews/:reviewID", (req, res) => {
  return res.json(req.params);
  //res.send("Products and Reviews");
});

app.listen(5004, () => {
  console.log("Server running on Port 5004");
});
