import mongoose from "mongoose";

const vendorSchema = new mongoose.Schema({
  vendorId: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  fullname: {
    type: String,
    required: true,
  },
  age: Number,
  address: String,
  city: String,
  state: String,
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

vendorSchema.index({ location: "2dsphere" });

module.exports = mongoose.model("Vendor", vendorSchema);
