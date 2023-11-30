const {
  getAllCategories,
  createNewCategory,
} = require("../controllers/categories");
const router = require("express").Router();

router.get("/", getAllCategories);
router.post("/newCategory", createNewCategory);

module.exports = router;
