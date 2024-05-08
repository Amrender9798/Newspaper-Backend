import mongoose from 'mongoose';

const salesSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
  sales: {
    type: Number,
    required: true
  },
  cash: {
    type: Number,
    required: true
  },
  date: {
    type: Number,
    required: true
  }
});

const Sales = mongoose.model('Sales', salesSchema);

export default Sales;
