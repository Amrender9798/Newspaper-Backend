import { Router } from "express";
import {
  createCustomer,
  getAllCustomers,
  getCustomerById,
  deleteCustomer,
  updateCustomerName,
  updateCustomerBalance,
} from "../controllers/customerController.js";

const router = Router();

router.post("/", createCustomer);
router.get("/", getAllCustomers);
router.get("/:id", getCustomerById);
router.put("/name/:id", updateCustomerName);
router.put("/balance/:id", updateCustomerBalance);



router.delete("/:id", deleteCustomer);

export default router;
