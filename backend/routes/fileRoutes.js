const express = require('express');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const crypto = require('crypto');
const path = require('path');
const { gridfsBucket } = require('../config/database');
const { uploadFile, retrieveFile } = require('../controllers/fileController');

const router = express.Router();

const storage = new GridFsStorage({
  url: 'mongodb+srv://thanincwtnk:thaninboy4@smartcity.5sxkzfv.mongodb.net/smartcity?retryWrites=true&w=majority&appName=smartcity',
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
            if (err) {
                return reject(err);
            }
            const filename = buf.toString('hex') + path.extname(file.originalname);
            const fileInfo = {
                filename: filename,
                bucketName: 'uploads'
            };
            resolve(fileInfo);
      });
    });
  }
});


const upload = multer({ storage });

// File upload route
router.post('/upload', upload.single('file'), uploadFile);

// File retrieval route
router.get('/:filename', retrieveFile);

module.exports = router;
