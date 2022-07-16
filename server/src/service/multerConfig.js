/*const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      const pa = path.dirname
      cb(null, "./tempoUpload");
  }, 
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, file.originalname);
  },
  }),
  
});*/
const multer = require("multer");
const path = require("path");

module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".PNG") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});