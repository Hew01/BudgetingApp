const mongoose = require('mongoose');

// Define transaction schema
const transactionSchema = new mongoose.Schema({
  transactionType: String,
  category: String,
  amount: Number,
  paymentMethod: String,
  date: Date,
  note: String,
});

// Create transaction model
const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;