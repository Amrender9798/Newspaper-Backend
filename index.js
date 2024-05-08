import express from "express";
import http from "http";
import dotenv from "dotenv";
import cors from "cors";
import connectToDatabase from "./database.js";
import customerRoutes from "./routes/customerRoutes.js";
import newspaperRoutes from "./routes/newspaperRoutes.js";
import purchaseRoutes from "./routes/purchaseRoutes.js";
import saleRoutes from "./routes/salesRoutes.js";



dotenv.config();

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());

app.use('/customers', customerRoutes);
app.use('/newspapers', newspaperRoutes);
app.use('/purchases', purchaseRoutes);
app.use('/sales',saleRoutes);


const PORT = process.env.PORT || 5001;

app.get("/test",(req,res)=> {
  console.log("test is working");
});
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
  connectToDatabase();
});
