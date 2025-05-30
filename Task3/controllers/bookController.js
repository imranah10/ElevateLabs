let books = [
  { id: 1, title: "Book One", author: "Author A" },
  { id: 2, title: "Book Two", author: "Author B" }
];

// GET all books
exports.getBooks = (req, res) => {
  res.json(books);
};

// POST a new book
exports.addBook = (req, res) => {
  const newBook = req.body;
  books.push(newBook);
  res.status(201).json(newBook);
};

// PUT update book by ID
exports.updateBook = (req, res) => {
  const bookId = parseInt(req.params.id);
  const updatedBook = req.body;

  books = books.map(book => (book.id === bookId ? updatedBook : book));
  res.json({ message: "Book updated", book: updatedBook });
};

// DELETE book by ID
exports.deleteBook = (req, res) => {
  const bookId = parseInt(req.params.id);
  books = books.filter(book => book.id !== bookId);
  res.json({ message: "Book deleted" });
};
