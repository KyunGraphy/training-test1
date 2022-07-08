require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect(process.env.DB_ULR, {  useNewUrlParser: true   })
const db = mongoose.connection
db.on('error', err => console.error(error))
db.once('open', () => console.log('connected to db'))

app.use(express.json())

const projectRouter = require('./routes/projects')
app.use('/projects', projectRouter)

app.listen(27017, () => console.log('listening on port: ${port}'));


