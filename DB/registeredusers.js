const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
const SECRET_KEY = "MYNAMEISANASRAZAIAMAMERNSTACKDEV"

const RegisteruserSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    password : String,   
    tokens:[
        {
            token:String
        }
    ],

});

RegisteruserSchema.pre('save',async function(next){
    console.log("hi from hash")
    if(this.isModified('password')){
        this.password =await bcrypt.hash(this.password,12);
    }
    next();
});



RegisteruserSchema.methods.generateAuthToken = async function () {
    try {
        let token23 = jwt.sign({ _id: this._id },SECRET_KEY , {
            expiresIn: "1d"
        });

        this.tokens = this.tokens.concat({ token: token23 });
        await this.save();
        return token23;
    } catch (error) {
       console.log(error)
    }
}


module.exports=mongoose.model('registeredUsers',RegisteruserSchema);









