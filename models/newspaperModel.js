  // Import Mongoose
  import mongoose from 'mongoose';

  // Define the schema for the newspaper
  const newspaperSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  });

  // Create a Mongoose model using the schema
  const Newspaper = mongoose.model('Newspaper', newspaperSchema);

  // Export the model
  export default Newspaper;
