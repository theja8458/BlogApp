const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    const conn = await mongoose.connect("mongodb://127.0.0.1:27017/blog"); // Local DB URI
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (err) {
    console.log("MongoDB connection error:", err);
  }
};

module.exports = connectDB;