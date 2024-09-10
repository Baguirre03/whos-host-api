const mongoose = require("mongoose");

const { Schema } = mongoose;

const partySchema = new Schema({
  party_creator: { type: Schema.Types.ObjectId, ref: "user", required: true },
  users: { type: Array, required: true },
  password: { type: String, required: false },
  locations: { type: Array, required: true },
  food: { type: Array, required: false },
  drinks: { type: Array, required: false },
});

module.exports = mongoose.model("party", partySchema);
