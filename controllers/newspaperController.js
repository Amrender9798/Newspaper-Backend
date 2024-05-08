import Newspaper from "../models/newspaperModel.js";



// Controller to create a new newspaper
export const createNewspaper = async (req, res) => {
  try {
    // Extract data from request body
    const { name, price } = req.body;

    // Create a new newspaper document
    const newspaper = new Newspaper({ name, price });

    // Save the newspaper to the database
    const savedNewspaper = await newspaper.save();

    // Send the saved newspaper as response
    res.status(201).json(savedNewspaper);
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to get all newspapers
export const getAllNewspapers = async (req, res) => {
  try {
    // Fetch all newspapers from the database
    const newspapers = await Newspaper.find();

    // Send the newspapers as response
    res.status(200).json(newspapers);
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to get a single newspaper by ID
export const getNewspaperById = async (req, res) => {
  try {
    // Extract newspaper ID from request parameters
    const { id } = req.params;

    // Fetch the newspaper from the database by ID
    const newspaper = await Newspaper.findById(id);

    // If newspaper is not found, return 404 Not Found
    if (!newspaper) {
      return res.status(404).json({ message: 'Newspaper not found' });
    }

    // Send the newspaper as response
    res.status(200).json(newspaper);
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to update a newspaper by ID
export const updateNewspaperById = async (req, res) => {
  try {
    // Extract newspaper ID and updated data from request body
    const { id } = req.params;
    const { name, price } = req.body;

    // Find the newspaper by ID and update it
    const updatedNewspaper = await Newspaper.findByIdAndUpdate(
      id,
      { name, price },
      { new: true }
    );

    // If newspaper is not found, return 404 Not Found
    if (!updatedNewspaper) {
      return res.status(404).json({ message: 'Newspaper not found' });
    }

    // Send the updated newspaper as response
    res.status(200).json(updatedNewspaper);
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Controller to delete a newspaper by ID
export const deleteNewspaperById = async (req, res) => {
  try {
    // Extract newspaper ID from request parameters
    const { id } = req.params;

    // Find the newspaper by ID and delete it
    const deletedNewspaper = await Newspaper.findByIdAndDelete(id);

    // If newspaper is not found, return 404 Not Found
    if (!deletedNewspaper) {
      return res.status(404).json({ message: 'Newspaper not found' });
    }

    // Send a success message as response
    res.status(200).json({ message: 'Newspaper deleted successfully' });
  } catch (error) {
    // Handle error
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};
