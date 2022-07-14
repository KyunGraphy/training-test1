
const express = require('express')
const multer  = require('multer')
const fs = require('fs')
// const upload = multer({ dest: 'uploads/' })

let b64encode = () => {
    return base64_encode('')
}
//  base64_encode('the image file between this'), example: base64_encode('image.png')



// function to add data:image to the beginning of the string, and convert the image to base64 format
function base64_encode(file) {
    return "data:image/png;base64," + fs.readFileSync(file, 'base64');
}

module.exports = b64encode