require('./db')
const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.send(`<html>
    <head>
      <title>Books App Api</title>
    </head>

    <body>
      <h1>Welcome to API Application</h1>
    </body>
  </html>`)
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
