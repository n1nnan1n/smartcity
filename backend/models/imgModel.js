const mongoose = require('mongoose');
const Schema = mongoose.Schema

const imgSchema = new Schema({
    imgname:{ type: String, required: false },
    image: { data: Buffer, contentType: String }
},{ timestamps: true, versionKey: false });

const Img = mongoose.model('Img', imgSchema);

module.exports = Img;