const express = require('express')
const router = require('./src/routes/routeLogin')
const connectDB = require('./src/service/connectDB')
require('dotenv').config()
const port = process.env.PORT
const app = express()

router(app)
app.use(express.json())
connectDB.connect()
app.listen(port, () => console.log(`port : ${port}`))