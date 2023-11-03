require('./db')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send(`<h1>Server is running on port ${process.env.PORT}</h1>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
