import express from "express";
const router = express.Router();
import Product from "./Schema/vendor.model.js";
import Vendor from "./Schema/vendor.model.js";
const { v4: uuidv4 } = require("uuid");

router.post("/products", async (req, res) => {
  try {
    const { vendorId, title, price, tags } = req.body;

    const vendor = await Vendor.findOne({ vendorId });
    if (!vendor) return res.status(404).json({ message: "Vendor not found" });

    const product = new Product({
      productId: uuidv4(),
      vendorId,
      title,
      price,
      tags,
      location: vendor.location,
    });

    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.delete("/products/:productId", async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.productId });
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.vendorId !== req.body.vendorId) {
      return res.status(403).json({ message: "Unauthorized operation" });
    }

    await Product.deleteOne({ productId: req.params.productId });
    res.json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.put("/products/:productId", async (req, res) => {
  try {
    const product = await Product.findOne({ productId: req.params.productId });
    if (!product) return res.status(404).json({ message: "Product not found" });

    if (product.vendorId !== req.body.vendorId) {
      return res.status(403).json({ message: "Unauthorized operation" });
    }

    const updatedProduct = await Product.findOneAndUpdate(
      { productId: req.params.productId },
      req.body,
      { new: true },
    );

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get("/products/vendor/:vendorId", async (req, res) => {
  try {
    const products = await Product.find({ vendorId: req.params.vendorId });
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
