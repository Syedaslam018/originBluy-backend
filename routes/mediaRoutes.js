const express = require('express');
const multer = require('multer');
const { uploadMedia, getMedia } = require('../controllers/mediaController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/upload', authMiddleware, upload.single('file'), uploadMedia);
router.get('/', authMiddleware, getMedia);

module.exports = router;