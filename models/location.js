const mongoose = require("mongoose");

const { Schema } = mongoose;

const locationSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: "user", required: true },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: "",
  },
  address: {
    street: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  coordinates: {
    type: {
      type: String,
      enum: ["Point"], // GeoJSON type must be 'Point'
      required: true,
    },
    coordinates: {
      type: [Number], // Array of numbers: [longitude, latitude]
      required: true, // Ensure coordinates are always provided
    },
  },
});

module.exports = mongoose.model("locational", locationSchema);
