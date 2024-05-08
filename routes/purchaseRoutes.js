// purchase.routes.js
import express from "express";
import {
  createPurchase,
  deletePurchase,
  getPurchaseByDate,
  updatePurchase,
} from "../controllers/purchaseController.js";

const router = express.Router();

router.post("/", createPurchase);
router.get("/", getPurchaseByDate);
router.put("/:id", updatePurchase);
router.delete("/:id", deletePurchase);

export default router;
