const mongoose = require("mongoose");

const { Schema } = mongoose;

const locationSchema = new Schema({
  address: { type: String, required: true },
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

module.exports = mongoose.model("locational", locationSchema);
