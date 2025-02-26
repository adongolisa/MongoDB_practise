use library;

// 2. Creates the books Collection and Inserts 5 Books
db.books.insertMany([
  { title: "The Alchemist", author: "Paulo Coelho", publishedYear: 1988, genre: "Fiction", ISBN: "9780062315007" },
  { title: "Atomic Habits", author: "James Clear", publishedYear: 2018, genre: "Self-Help", ISBN: "9780735211292" },
  { title: "Clean Code", author: "Robert C. Martin", publishedYear: 2008, genre: "Programming", ISBN: "9780132350884" },
  { title: "Sapiens", author: "Yuval Noah Harari", publishedYear: 2011, genre: "History", ISBN: "9780062316097" },
  { title: "1984", author: "George Orwell", publishedYear: 1949, genre: "Dystopian", ISBN: "9780451524935" }
]);

// 3. Retrieve Data
db.books.find();

// Query books by a specific author
db.books.find({ author: "James Clear" });

// Find books published after 2000
db.books.find({ publishedYear: { $gt: 2000 } });


// Update the publishedYear of a specific book
db.books.updateOne({ ISBN: "9780062316097" }, { $set: { publishedYear: 2015 } });
// Add a new field 'rating' to all books and set a default value
db.books.updateMany({}, { $set: { rating: 5 } });


// Delete a book by ISBN
db.books.deleteOne({ ISBN: "9780451524935" });
// Remove all books of a particular genre
db.books.deleteMany({ genre: "Self-Help" });



// Users Collection
db.users.insertOne({ _id: ObjectId(), name: "Alice", email: "alice@gmail.com" });
// Products Collection
db.products.insertOne({ _id: ObjectId(), name: "Laptop", price: 1200, category: "Electronics" });
// Orders Collection
db.orders.insertOne({ _id: ObjectId(), userId: ObjectId("..."), productId: ObjectId("..."), quantity: 1, status: "Shipped" });



// Find the total number of books per genre
db.books.aggregate([{ $group: { _id: "$genre", totalBooks: { $sum: 1 } } }]);
// Calculate the average published year of all books
db.books.aggregate([{ $group: { _id: null, avgYear: { $avg: "$publishedYear" } } }]);
// Identify the top-rated book
db.books.find().sort({ rating: -1 }).limit(1);

// Create an index on the author field
db.books.createIndex({ author: 1 });
