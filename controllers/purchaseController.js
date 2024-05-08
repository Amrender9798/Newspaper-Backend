import Customer from "../models/customerModel.js";
import Purchase from "../models/purchaseModel.js";
import mongoose from "mongoose";

export const createPurchase = async (req, res) => {
  const session = await mongoose.startSession();
  session.startTransaction();
  
  try {
    const purchases = req.body;
    // Iterate over each purchase in the array
    for (const purchaseData of purchases) {
      // Create a new Purchase document
      const purchase = new Purchase(purchaseData);

      // Save the purchase document within the transaction
      await purchase.save({ session });
    }

    // Commit the transaction
    await session.commitTransaction();
    session.endSession();

    // Respond with a success message
    res.status(201).json({ message: "Purchases created successfully" });
  } catch (error) {
    // If an error occurs, abort the transaction
    await session.abortTransaction();
    session.endSession();
    
    res.status(500).json({ message: error.message });
  }
};



export const getPurchaseByDate = async (req, res) => {
  try {
    
    const { userId, date } = req.query; 
    
    const user = await Customer.findById(userId);
    console.log('------Disco Dancer--------');
    console.log(user);
    console.log(userId,user._id,date);

    
    

    const purchases = await Purchase.find({
      userId: user._id,
      date
    });


    console.log("Purchases:", purchases);

    res.json(purchases);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};




// Update a purchase by ID
export const updatePurchase = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, newspaperId, quantity } = req.body;
    const existingPurchase = await Purchase.findById(id);
    if (!existingPurchase) {
      return res.status(404).json({ message: "Purchase not found" });
    }
    existingPurchase.userId = userId;
    existingPurchase.newspaperId = newspaperId;
    existingPurchase.quantity = quantity;
    await existingPurchase.save();
    res.status(200).json(existingPurchase);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a purchase by ID
export const deletePurchase = async (req, res) => {
  try {
    const { id } = req.params;
    const purchase = await Purchase.findById(id);
    if (!purchase) {
      return res.status(404).json({ message: "Purchase not found" });
    }
    await purchase.remove();
    res.status(200).json({ message: "Purchase deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
