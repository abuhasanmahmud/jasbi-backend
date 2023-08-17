import asyncHandler from "express-async-handler";
import Order from "../model/orderModel.js";
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import Stripe from "stripe";

// import stripe = require("stripe")(process.env.STRIP_SECRET_KEY);
const stripe = Stripe(process.env.STRIP_SECRET_KEY);

//get all orders
//method get  /api/orders

const getAllOrders = asyncHandler(async (req, res) => {
  const allOrders = await Order.find();
  res.status(200).json(allOrders);
});

//create a new order
//method post  /api/orders/new

const createNewOrder = asyncHandler(async (req, res) => {
  const orderData = req.body;
  // console.log("order data", req.body);
  // console.log("order alsdkjflaksjdfla");
  const newOrder = await Order.create(orderData);

  res.status(200).json(newOrder);
});

const paymentOrderByStripe = asyncHandler(async (req, res) => {
  console.log("req.body", req.body.lineItems);
  try {
    const session = await stripe.checkout.sessions.create({
      line_items: req.body.lineItems,
      mode: "payment",
      payment_method_types: ["card"],
      success_url: `${process.env.FRONTEND_URL}/confirm-order`,
      cancel_url: `${process.env.FRONTEND_URL}/checkout`,
    });

    return res.status(201).json(session);
  } catch (error) {
    return res.status(500).json(error);
  }
});

const calculateOrderAmount = (items) => {
  return 1400;
};

const createPaymentIntent = asyncHandler(async (req, res) => {
  const { items } = req.body;
  console.log("items", items);
  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items),
    currency: "usd",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

export { getAllOrders, createNewOrder, paymentOrderByStripe, createPaymentIntent };
