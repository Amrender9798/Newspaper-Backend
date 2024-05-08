import { Router } from 'express';
import {
  createNewspaper,
  getAllNewspapers,
  getNewspaperById,
  updateNewspaperById,
  deleteNewspaperById
} from '../controllers/newspaperController.js';




const router = Router();

// Route to create a new newspaper
router.post('/', createNewspaper);

// Route to get all newspapers
router.get('/', getAllNewspapers);

// Route to get a single newspaper by ID
router.get('/:id', getNewspaperById);

// Route to update a newspaper by ID
router.put('/:id', updateNewspaperById);

// Route to delete a newspaper by ID
router.delete('/:id', deleteNewspaperById);

export default router;
