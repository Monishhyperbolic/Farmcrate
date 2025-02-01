import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  vendorId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  tags: [String],
  location: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

productSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Product", productSchema);
