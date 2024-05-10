import Sales from "../models/salesModel.js";

export const calculateSalesAndCash = async (req, res) => {
  try {
    const { date } = req.query;
    const sales = await Sales.find({ date });

    let totalSales = 0;
    let totalCash = 0;
    sales.forEach((sale) => {
      totalSales += sale.sales;
      totalCash += sale.cash;
    });

    res.status(200).json({ totalSales, totalCash });
  } catch (error) {
    throw new Error(`Error calculating sales and cash: ${error.message}`);
  }
};

export const saveSalesAndCash = async (req, res) => {
  try {
    const { userId, sales, cash, date } = req.body;
   
   
    const newSale = new Sales({
      userId,
      sales,
      cash,
      date,
    });

    // Save the new Sales document to the database
    await newSale.save();

    res.status(201).json({ message: "Sales data saved successfully" });
  } catch (error) {
    res.status(500).json({ error: `Error saving sales data: ${error.message}` });
  }
};

