const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  orderid: Number,
  customerid: Number,
  employeeid: Number,
  orderdate: String,
  shipperid: Number,
});

const Order = mongoose.model("Order", orderSchema);
module.exports = { Order };
