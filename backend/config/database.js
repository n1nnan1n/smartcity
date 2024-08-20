const mongoose = require('mongoose');
const Grid = require('gridfs-stream');

let gfs, gridfsBucket;

const connectDB = async () => {

    const conn = await mongoose.connect('mongodb+srv://thanincwtnk:thaninboy4@smartcity.5sxkzfv.mongodb.net/smartcity?retryWrites=true&w=majority&appName=smartcity', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected');

    let gfs;
    conn.once('open', () => {
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('uploads');
});
};

module.exports = { connectDB, gfs };
