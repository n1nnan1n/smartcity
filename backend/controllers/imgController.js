const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');
// const upload = require('../middleware/upload');
const Img = require('../models/imgModel');
const User = require('../models/userModel'); // Adjust this path as per your project structure

const imgController = {
    postImg : async (req, res) => {
    try {
        const { imgname } = req.body;
        const image = req.file;

        const newImg = new Img({
            imgname,
            image: { data: image.buffer, contentType: image.mimetype }
        });
        await newImg.save();

        res.status(201).json({ message: 'User registered successfully', imgID: newImg._id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getImg : async (req, res) => {
    const imageId = req.params.imageId;
    try {
      const img = await Img.findById(imageId);
      if (!img) {
        return res.status(404).send('img not found');
      }
      res.set('Content-Type', img.image.contentType);
      res.send(img.image.data.buffer);
    } catch (error) {
      res.status(500).send('Server error');
    }
},
  getAllImg : async (req, res) => {
    try {
        const img = await Img.find();
        res.json(img);
      } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
}
}
module.exports = imgController;