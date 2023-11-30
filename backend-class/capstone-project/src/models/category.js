const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const CategoryModel = mongoose.model("Category", categorySchema);

const createCategory = (values) =>
  new CategoryModel(values).save().then((category) => category.toObject());
const deleteCategoryById = (id) => CategoryModel.findByIdAndDelete({ _id: id });
const getCategoryById = (id) => CategoryModel.findById(id);
const getCategoryByName = (name) => CategoryModel.find({ name: name });
const getCategories = () => CategoryModel.find();
const updateCategoryById = (id, values) =>
  CategoryModel.findByIdAndUpdate(id, values);

module.exports = {
  createCategory,
  deleteCategoryById,
  getCategoryById,
  getCategoryByName,
  getCategories,
  updateCategoryById,
};
