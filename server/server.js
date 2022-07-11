require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_ULR, {  useNewUrlParser: true   })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('connected to db'))

app.use(express.json())

const projectRouter = require('./routes/projects')
app.use('/projects', projectRouter)

const projectListRouter = require('./routes/projectLists')
app.use('/projectLists', projectListRouter)

app.listen(5000, () => console.log('listening on port: ${port} '));


