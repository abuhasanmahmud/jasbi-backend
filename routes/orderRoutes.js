import express from "express";
import { createNewOrder, getAllOrders, paymentOrderByStripe } from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getAllOrders);
router.post("/new", createNewOrder);
router.post("/create-checkout-session", paymentOrderByStripe);

export default router;
