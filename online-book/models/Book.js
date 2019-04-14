var mongoose = require('mongoose');
var BookSchema = new mongoose.Schema({
  isbn: String,
  title: String,
  author: String,
  description: String,
  published_year: String,
  publisher: String,
  price: Number,
  piece: Number,
});

module.exports = mongoose.model('Book', BookSchema);
