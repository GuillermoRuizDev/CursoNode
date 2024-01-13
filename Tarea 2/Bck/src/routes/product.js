const express = require("express");
const productSchema = require("../models/product");
const router = express.Router();

//create product
router.post("/product", (req, res) => {
  const product = productSchema(req.body);
  product
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//get all products
router.get("/products", (req, res) => {
  productSchema
    .find()
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//get a product
router.get("/product/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//update product
router.put("/product/:id", (req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  productSchema
    .updateOne({ _id: id }, { $set: { name, age, email } })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

//delete product
router.delete("/product/:id", (req, res) => {
  const { id } = req.params;
  productSchema
    .deleteOne({ _id: id })
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      res.json({ message: error });
    });
});

module.exports = router;
