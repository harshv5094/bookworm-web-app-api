const mongoose = require('mongoose')
const env = require('dotenv').config()

const mongoURI = process.env.MONGODBURI

mongoose
  .connect(mongoURI, {
    useUnifiedTopology: true
  })
  .then(() => console.log('Database is successfully connected to mongoDB'))
  .catch(error => console.log('Error Connecting Application:\n', error))
