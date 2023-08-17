import dotenv from "dotenv";
dotenv.config();
import Product from "./model/productModel.js";
import connectDb from "./config/db.js";
import products from "./data/products.js";

connectDb();
const importData = async () => {
  try {
    // console.log("products", products);
    await Product.deleteMany();
    await Product.insertMany(products);

    console.log("data inserted successfully!");
    process.exit();
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

importData();
