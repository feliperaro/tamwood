const { createCategory, getCategories } = require("../models/category");

const createNewCategory = async (req, res) => {
  try {
    const { name } = req.body;
    // validate inputs
    const category = {
      name,
    };
    console.log("category", category);

    const newCategory = await createCategory(category);
    console.log("newCategory", newCategory);

    return res
      .status(200)
      .json({
        message: "Category registered with success",
        newCategory: newCategory,
        category: category,
      })
      .end();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

const getAllCategories = async (_, res) => {
  try {
    const categories = await getCategories();
    res.status(200).json({ categories: categories });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createNewCategory,
  getAllCategories,
};
