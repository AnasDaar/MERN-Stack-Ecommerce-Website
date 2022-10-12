const mongoose = require('mongoose')

const checkoutinfo = new mongoose.Schema({
    name:String,
    email:String,
    adress:String,
    province:String,
    phone:Number,
});

module.exports=mongoose.model('checkoutdata',checkoutinfo);
