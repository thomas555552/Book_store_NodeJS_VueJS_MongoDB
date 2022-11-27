var mongoose = require('mongoose');
var ArticleSchema = new mongoose.Schema({
  id: {
    type: String,
    length: 10,
    unique: true,
    required: true
  },
  articleName: {
    type: String,
    length: 50,
    required: true
  },
  description: {
    type: String,
    length: 200
  },
  releaseYear: {
    type: Number,
    length: 4,
    required: true
  },
  brand: String,
  currency: String,
  isAvalaible: { type: Boolean, default: true }
});

module.exports = mongoose.model('Article', ArticleSchema);