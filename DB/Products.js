const mongoose = require('mongoose')

const products = new mongoose.Schema({
    pname:String,
    pcategory:String,
    pprice:Number,
    pimage:String,
});

module.exports=mongoose.model('products',products);
