const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// Routes
const bookRoutes = require('./routes/bookRoutes');
app.use('/books', bookRoutes);

// Starting server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
