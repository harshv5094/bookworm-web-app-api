const mongoose = require('mongoose')
require('dotenv').config()

const mongoURI = process.env.MONGODBURI

mongoose
  .connect(mongoURI)
  .then(() => console.log('Database is successfully connected to mongoDB'))
  .catch(error => console.log('Error Connecting Application:\n', error))
