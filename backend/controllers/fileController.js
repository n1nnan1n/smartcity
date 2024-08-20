// controllers/fileController.js
const { gfs, conn } = require('../config/database');
const multer = require('multer');
const { GridFsStorage } = require('multer-gridfs-storage');
const path = require('path');
const crypto = require('crypto');

// Create storage engine
const storage = new GridFsStorage({
    url: 'mongodb+srv://thanincwtnk:thaninboy4@smartcity.5sxkzfv.mongodb.net/smartcity?retryWrites=true&w=majority&appName=smartcity',
    file: (req, file) => {
        return new Promise((resolve, reject) => {
            crypto.randomBytes(16, (err, buf) => {
                if (err) {
                    console.error('Error generating random bytes:', err);
                    return reject(err);
                }
                const filename = buf.toString('hex') + path.extname(file.originalname);
                const fileInfo = {
                    filename: filename,
                    bucketName: 'uploads'
                };
                console.log('File Info:', fileInfo);
                resolve(fileInfo);
            });
        });
    }
});

const upload = multer({ storage }).single('file');

// Controller function to handle file upload
exports.uploadFile = (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        res.status(200).json({ file: req.file });
    });
};

exports.getFile = (req, res) => {
    const filename = req.params.filename;

    gfs.files.findOne({ filename: filename }, (err, file) => {
        if (err || !file) {
            return res.status(404).json({ err: 'File not found' });
        }

        // Check if the file is an image
        if (file.contentType.startsWith('image/')) {
            // Read output to browser
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
        } else {
            res.status(404).json({ err: 'Not an image' });
        }
    });
};
