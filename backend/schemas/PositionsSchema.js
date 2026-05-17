 const { Schema, model } = require("mongoose");

const PositionsSchema = new Schema({
  name: String,
  qty: Number,
  avg: Number,
  price: Number,
  netChg: String,
  dayChg: String,
  product: {
    type: String,
    default: "MIS"     
  },
  isLoss: {
    type: Boolean,
    required: true       
  }
});

const PositionsModel = model("position", PositionsSchema);

module.exports = { PositionsSchema, PositionsModel };