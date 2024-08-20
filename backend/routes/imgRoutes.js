const express = require('express');
const router = express.Router();
const multer = require('multer');
const imgController = require('../controllers/imgController');

const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  limits: { fieldSize: 25 * 1024 * 1024 }, // Increase the field size limit as needed
});

router.post('/upload',upload.single('image'), imgController.postImg);
router.get('/image', imgController.getAllImg);
router.get('/id/:imageId', imgController.getImg);

module.exports = router;
