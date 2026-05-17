 const { Schema, model } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: {
    type: String, 
    enum: ["BUY", "SELL"],
    required: true
  },
  status: {
    type: String,
    default: "EXECUTED"  
  },
  createdAt: {
    type: Date,
    default: Date.now      
  }
});

// Using lowercase names for model initialization exports to prevent system path collisions
const OrdersModel = model("order", OrdersSchema);

module.exports = { OrdersSchema, OrdersModel };