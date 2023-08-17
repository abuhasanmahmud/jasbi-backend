import express from "express";
import {
  createNewOrder,
  createPaymentIntent,
  getAllOrders,
  paymentOrderByStripe,
} from "../controllers/orderController.js";

const router = express.Router();

router.get("/", getAllOrders);
router.post("/new", createNewOrder);
router.post("/create-checkout-session", paymentOrderByStripe);
router.post("/create-payment-intent", createPaymentIntent);

export default router;
