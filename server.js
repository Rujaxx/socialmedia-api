const express = require('express')
const dotenv = require('dotenv')

//load env vars
dotenv.config({ path : "./config/config.env"})

//connect MONGO db
const connectDB = require('./config/db')
connectDB();


const app = express()
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})