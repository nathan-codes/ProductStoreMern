import Product from "../models/Product.model.js";

// Controller to get all products
const getAllProducts = async (req, res) => {
  try {
    const allProducts = await Product.find();
    console.log("Successfully fetched all products, ", allProducts);
    res.status(200).json({
      success: true,
      message: "Successfully fetched all products",
      productCount: allProducts.length,
      data: allProducts,
    });
  } catch (error) {
    console.error("Error fetch Products", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch all products",
      error: error,
    });
  }
};

// Controller  to create a new Product
const createProduct = async (req, res) => {
  const { name, price, imageUrl } = req.body;

  // Check if all fields have been entered
  if (!name || !price || !imageUrl) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

  try {
    const newProdut = await Product.create({
      name,
      price,
      imageUrl,
    });
    res.status(201).json({
      success: true,
      message: "Successfully created product",
      data: newProdut,
    });
  } catch (error) {
    console.error("Error creating new Product", error);
    res.status(500).json({
      success: false,
      message: "Failed to create  product",
      error: error,
    });
  }
};

// Controller  to update  a  Product
const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if Product Exists
    const foundProdut = await Product.findById(id);
    if (!foundProdut) {
      return res.status(400).json({
        success: false,
        message: "Product does not exist in database",
      });
    }

    // Update found product
    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Successfully updated product",
      data: updatedProduct,
    });
  } catch (error) {
    console.error("Error updating  new Product", error);
    res.status(500).json({
      success: false,
      message: "Failed to update  product",
      error: error,
    });
  }
};

// Delete a specic product
const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    // Check if Product Exists
    const foundProdut = await Product.findById(id);
    if (!foundProdut) {
      return res.status(400).json({
        success: false,
        message: "Product does not exist in database",
      });
    }

    //   Delete Found Product
    await Product.findByIdAndDelete(id);

    res.status(200).json({
      success: true,
      message: "Successfully deleted product",
    });
  } catch (error) {
    console.error("Error deleting   Product", error);

    res.status(500).json({
      success: false,
      message: "Failed to delete  product",
      error: error,
    });
  }
};

export { getAllProducts, createProduct, updateProduct, deleteProduct };
