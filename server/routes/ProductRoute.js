import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  updateProduct,
} from "../controllers/product.controller.js";

const route = Router();

// Get All Products
route.get("/", getAllProducts);

// Create/Post a new Product
route.post("/", createProduct);


//Update a product 
route.put("/:id", updateProduct)

// Delete a product
route.delete("/:id", deleteProduct )

export default route 