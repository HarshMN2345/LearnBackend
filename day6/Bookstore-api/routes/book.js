import express from 'express';
import Book from '../models/book.js';
import { getAllBooks, getBookById, addBook } from '../controllers/book.js';

const router = express.Router();

router.get('/', getAllBooks);
router.get('/:id', getBookById);
router.post('/add', addBook);
// router.put('/update/:id',); // Add the corresponding controller function
// router.delete('/delete/:id',); // Add the corresponding controller function

export default router;