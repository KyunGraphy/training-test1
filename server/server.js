const express = require('express')
const routeOrg = require('../server/src/routes/routeOrganization')
const connectDB = require('./src/service/connectDB')
require('dotenv').config()
const port = process.env.PORT
const app = express()


app.use(express.json())
app.use(express.urlencoded({
    extended: true
}));
routeOrg(app)
connectDB.connect()
app.listen(port, () => console.log(`port : ${port}`))