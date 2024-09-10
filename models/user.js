const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  location: { type: Schema.Types.ObjectId, ref: "locaion" },
});

module.exports = mongoose.model("user", userSchema);
