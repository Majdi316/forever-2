import express from "express";
import {
  AddToCart,
  updateCart,
  getUserCart,
} from "../controllers/cartController.js";
import authUser from "../middleware/auth.js";

const cartRouter = express.Router();

cartRouter.post("/get", authUser, getUserCart);
cartRouter.post("/add", authUser, AddToCart);
cartRouter.post("/update", authUser, updateCart);

export default cartRouter;
