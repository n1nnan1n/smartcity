const { gfs, gridfsBucket } = require('../config/database');
const File = require('../models/File');

const uploadFile = async (req, res) => {
  console.log(req.file); // Log to see all properties

  try {
    const { file } = req;

    if (!file) {
      throw new Error('No file uploaded');
    }

    // Create a new file metadata document
    const newFile = new File({
      filename: file.filename,
      contentType: file.contentType,
      size: file.size,
      gridfsId: file._id, // Make sure 'id' exists in the logged file object
    });

    await newFile.save();

    res.status(201).json({ message: "File uploaded successfully", fileId: newFile._id });
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


const retrieveFile = (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    if (!file || file.length === 0) {
        return res.status(404).send('No file exists');
    }

    if (file.contentType === 'image/jpeg' || file.contentType === 'image/png') {
        // Streaming file back to the client
        const readstream = gridfsBucket.openDownloadStream(file._id);
        readstream.pipe(res);
    } else {
        res.status(404).send('Not an image');
    }
});
};

module.exports = {
  uploadFile,
  retrieveFile
};
