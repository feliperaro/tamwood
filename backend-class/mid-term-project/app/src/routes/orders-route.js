const orderRouter = require("express").Router();
const { getOrderById, getOrders } = require("../controllers/orders-controller");

orderRouter.get("/", getOrders);
orderRouter.get("/:id", getOrderById);

module.exports = orderRouter;
