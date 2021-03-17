require('dotenv').config()

const mongoose = require('mongoose');

var MONGODB_URI = process.env.MONGODB_URI

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected to: ${MONGODB_URI}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;