import Book from "../models/book.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching books', error: err.message });
  }
};
// {
//     "title": "The Great Gatsby",
//     "author": "F. Scott Fitzgerald",
//     "year": 1925
//   }

export const getBookById = async (req, res) => {
  try {
    const book = await req.app.get('db').Book.findById(req.params.id);
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.status(200).json(book);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching book', error: err.message });
  }
};

export const addBook = async (req, res) => {
  try {
    const newBook = req.body;
    const newlyCreatedBook = await Book.create(newBook);
    res.status(201).json(newlyCreatedBook);
  } catch (err) {
    console.error(err);
  }
};