const express = require('express')
const routeOrg = require('../server/src/routes/routeOrganization')
const connectDB = require('./src/service/connectDB')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT
const app = express()
app.use(cors({
    credentials:true,
    origin:['http://localhost:3000']
}))
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
routeOrg(app)
connectDB.connect()
app.listen(port, () => console.log(`port : ${port}`))