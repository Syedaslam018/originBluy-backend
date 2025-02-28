const express = require('express');
const multer = require('multer');
const { uploadMedia, getMedia, deleteMedia } = require('../controllers/mediaController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/upload", authMiddleware, upload.single("file"), uploadMedia);
router.get("/", authMiddleware, getMedia);
router.delete("/:id", authMiddleware, deleteMedia);

module.exports = router;
