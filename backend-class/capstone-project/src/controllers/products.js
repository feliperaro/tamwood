const { isValidProduct } = require("../helpers");
const {
  createProduct,
  getProducts,
  getProductsByName,
  deleteProductById,
  getProductById,
  updateProductById,
} = require("../models/product");

const createNewProduct = async (req, res) => {
  try {
    const { name, description, price, inStock, category } = req.body;
    const newProduct = {
      name,
      description,
      price,
      inStock,
      category,
    };

    const isProductValid = isValidProduct(newProduct);
    if (!isProductValid.isValid) {
      return res.status(400).json({ message: isProductValid.message });
    }

    const product = await createProduct(newProduct);
    return res
      .status(200)
      .json({
        message: "Product created with success",
        product: product,
      })
      .end();
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.query;
    const product = await getProductById(id);
    if (product) {
      await deleteProductById(id);
      return res.status(200).json({ message: "Product deleted" });
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getAllProducts = async (req, res) => {
  let products = [];
  try {
    const { name } = req.query;
    if (name) {
      products = await getProductsByName(name);
    } else {
      products = await getProducts();
    }
    console.log(products);
    return res.status(200).json({ products });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProductById(id);
    if (product) {
      return res.status(200).json({ product });
    } else {
      return res.status(404).json({ message: "Product not found" });
    }
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const values = {
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      inStock: req.body.inStock,
      category: req.body.category,
    };

    const product = await getProductById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const productUpdated = await updateProductById(product._id, values);
    return res.status(200).json({ productUpdated });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createNewProduct,
  deleteById,
  getById,
  getAllProducts,
  updateProduct,
};
