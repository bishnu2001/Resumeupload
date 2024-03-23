const express = require("express");
const multer = require("multer");
const router = express.Router();
const { createStudent, getallstudentinfo } = require("../controller/studentController");

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, ""); // Destination folder for storing uploaded files
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // Unique filename
    },
});
const upload = multer({ storage: storage });

router.post("/studentinfo", upload.single("resume"), createStudent);
router.get('/getallstudentinfo', getallstudentinfo)

module.exports = router;