const {
  createNewProduct,
  getAllProducts,
  deleteById,
  getById,
  updateProduct,
} = require("../controllers/products");
const router = require("express").Router();

router.delete("/", deleteById);
router.get("/", getAllProducts);
router.get("/:id", getById);
router.put("/:id", updateProduct);
router.post("/", createNewProduct);

module.exports = router;
