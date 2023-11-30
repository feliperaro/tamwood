require("dotenv").config();
const { Order } = require("../models/order");

async function getOrderById(req, res) {
  try {
    const order = await Order.find({ orderid: req.params.id });
    res.json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

async function getOrders(req, res) {
  try {
    const orders = await Order.find({});
    res.json(orders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
}

module.exports = {
  getOrderById,
  getOrders,
};
