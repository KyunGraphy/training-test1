const mongo = require('mongoose')
require('dotenv').config()
//| 
const url = process.env.DB_url

let connect = () => {
    try {
        mongo.connect(url, () => {
            console.log('connect db success')
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    connect
}