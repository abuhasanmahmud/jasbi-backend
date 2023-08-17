import asyncHandler from "express-async-handler";
import Product from "../model/productModel.js";
import generateToken from "../utils/generateToken.js";

//get all product
//method get  /api/products

const getAllProduct = asyncHandler(async (req, res) => {
  const allProducts = await Product.find();
  res.status(200).json(allProducts);
});

export { getAllProduct };
