const express = require('express')
const routeOrg = require('../server/src/routes/routeOrganization')
const connectDB = require('./src/service/connectDB')
const cors = require('cors')
const bodyparser = require('cookie-parser')
const morgan = require('morgan')
const routeProject = require('../server/src/routes/routeProject')
require('dotenv').config()
const port = process.env.PORT
const app = express()
app.use(cors({
    credentials:true,
    origin:['http://localhost:3000']
}))
app.use(express.json())
app.use(morgan())
app.use(bodyparser())
app.use(express.urlencoded({
    extended: true
}));
routeOrg(app)
routeProject(app)
connectDB.connect()
app.listen(port, () => console.log(`port : ${port}`))