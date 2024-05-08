import mongoose from 'mongoose';

const customerSchema = new mongoose.Schema({
  name: String,
  balance: { type: Number, default: 0 } // Set default value to 0 for balance
});

const Customer = mongoose.model('Customer', customerSchema);
export default Customer;
 
