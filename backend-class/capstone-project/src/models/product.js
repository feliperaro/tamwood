const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  inStock: {
    type: Number,
    required: true,
  },
  category: String,
  description: String,
});

const ProductModel = mongoose.model("Product", productSchema);

const createProduct = (values) =>
  new ProductModel(values).save().then((product) => product.toObject());
const deleteProductById = (id) => ProductModel.findByIdAndDelete({ _id: id });
const getProductById = (id) => ProductModel.findById(id);
const getProductsByName = (name) =>
  ProductModel.find({
    name: {
      $regex: name,
      $options: "i",
    },
  });
const getProducts = () => ProductModel.find();
const getProductsByCategory = (category) =>
  ProductModel.find({ category: category });
const updateProductById = (id, values) =>
  ProductModel.findOneAndUpdate(id, values, { new: true });

module.exports = {
  createProduct,
  deleteProductById,
  getProductsByCategory,
  getProductById,
  getProductsByName,
  getProducts,
  updateProductById,
};
