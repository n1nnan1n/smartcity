const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  contentType: { type: String, required: true },
  size: { type: Number, required: true },
  uploadDate: { type: Date, default: Date.now },
  gridfsId: { type: mongoose.Schema.Types.ObjectId, required: true }, // Reference to the GridFS file
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
