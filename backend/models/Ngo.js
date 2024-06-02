const mongoose =require('mongoose');

const ngoSchema = new mongoose.Schema({
    id: Number,
    title: String,
    description: String,
    image: String,
    logo: String,
});

const NgoModel = mongoose.model('NGOs', ngoSchema);
module.exports=NgoModel
