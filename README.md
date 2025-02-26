# MongoDB Library Database Project

##  Project Overview
This project involves setting up a MongoDB database named `library`, creating a `books` collection, inserting sample records, performing CRUD operations, and implementing indexing and aggregation.

---
##  Setup Instructions
### **1 Install MongoDB**
Ensure you have MongoDB installed on your system. If not, download and install it from [MongoDB Official Site](https://www.mongodb.com/try/download/community).

### **2 Start MongoDB**
Start the MongoDB service:
```sh
mongod
```
Then, open another terminal and start the MongoDB shell:
```sh
mongosh
```

### **3 Create the Database & Collection**
Switch to the `library` database:
```sh
use library
```
Create the `books` collection and insert sample data:
```sh
db.books.insertMany([
  { title: "MongoDB Basics", author: "John Doe", publishedYear: 2022, genre: "Technology", ISBN: "1234567890" },
  { title: "Node.js Guide", author: "Jane Smith", publishedYear: 2018, genre: "Programming", ISBN: "9876543210" },
  { title: "Data Science with Python", author: "Alice Brown", publishedYear: 2019, genre: "Science", ISBN: "1122334455" },
  { title: "Machine Learning Essentials", author: "Bob Johnson", publishedYear: 2021, genre: "AI", ISBN: "5566778899" },
  { title: "Full-Stack Development", author: "Charlie White", publishedYear: 2023, genre: "Web Development", ISBN: "6677889900" }
]);
```

### **4 Retrieve Data**
Retrieve all books:
```sh
db.books.find().pretty()
```
Find books by a specific author:
```sh
db.books.find({ author: "John Doe" }).pretty()
```
Find books published after 2000:
```sh
db.books.find({ publishedYear: { $gt: 2000 } }).pretty()
```

### **5 Update Data**
Update the `publishedYear` of a specific book:
```sh
db.books.updateOne({ ISBN: "1234567890" }, { $set: { publishedYear: 2025 } })
```
Add a new field `rating` to all books with a default value of `5`:
```sh
db.books.updateMany({}, { $set: { rating: 5 } })
```

### **6 Delete Data**
Delete a book by its `ISBN`:
```sh
db.books.deleteOne({ ISBN: "1122334455" })
```
Remove all books of a particular genre:
```sh
db.books.deleteMany({ genre: "AI" })
```

### **7 Data Aggregation**
Find the total number of books per genre:
```sh
db.books.aggregate([{ $group: { _id: "$genre", count: { $sum: 1 } } }])
```
Calculate the average published year of all books:
```sh
db.books.aggregate([{ $group: { _id: null, avgYear: { $avg: "$publishedYear" } } }])
```
Identify the top-rated book:
```sh
db.books.find().sort({ rating: -1 }).limit(1)
```

### **8 Indexing**
Create an index on the `author` field:
```sh
db.books.createIndex({ author: 1 })
```
Check the indexes:
```sh
db.books.getIndexes()
```



