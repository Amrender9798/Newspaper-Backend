// purchase.model.js
import mongoose from 'mongoose';

const purchaseSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User collection
    required: true
  },
  newspaper: {
    type : String,
    required: true
  },
  price:{
    type:Number,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  date: {
    type: Number,
    required: true
  }
});

const Purchase = mongoose.model('Purchase', purchaseSchema);

export default Purchase;
