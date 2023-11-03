const { Schema, model } = require('mongoose')

const bookSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  publication: {
    type: String
  },
  category: {
    type: [String],
    enum: [
      'Action and Adventure',
      'Classics',
      'Comic Book or Graphic Novel',
      'Detective and Mystery',
      'Fantasy',
      'Historical Fiction',
      'Horror',
      'Literary Fiction'
    ]
  }
})

const Book = model('Book', bookSchema)
