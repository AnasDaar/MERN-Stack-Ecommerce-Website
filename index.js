const express = require("express");
const bcrypt = require('bcrypt')
const User = require('./DB/Users')
const jwt = require("jsonwebtoken")

const Checkout = require('./DB/checkoutinfo')
const Register = require('./DB/registeredusers')
const Products = require('./DB/Products')
const multer = require('multer')

// img storage path
const imgconfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, "./finalproject/public/uploads")
    },
    filename: (req, file, callback) => {
        callback(null, `image-${Date.now()}. ${file.originalname}`)
    }
})

// img filter
const isImage = (req, file, callback) => {
    if (file.mimetype.startsWith("image")) {
        callback(null, true)
    } else {
        callback(new Error("only images is allowd"))
    }
}

const upload = multer({
    storage: imgconfig,
    fileFilter: isImage
});
 
require('./DB/config')
const cors = require('cors');
 
const app = express()
app.use(cors());
app.use(express.json());
app.use("./finalproject/public/uploads", express.static("./finalproject/public/uploads"));
 
//contact form route
app.post('/contact', async (req, res) => {
    const user = new User(req.body);
    const result = await user.save();
    res.send(result);
})
 
//register route


app.post('/register', async (req, res) => {
    const { name, email, password, phone } = req.body;
    if (!name || !email || !password || !phone) {
        return res.status(422).json({ error: "please fill all input fields" })
    }
    try {

        const userExist = await Register.findOne({ email: email })

        if (userExist) {
            return res.status(422).json({ error: "email already exist" })
        }


        const register = new Register({ name, email, password, phone })
        await register.save()
        res.status(201).json({ message: "USer Registered" ,register})

    } catch (err) {
        conole.log(err)
    }



})

// const register = new Register(req.body);
//     const result = await register.save();
//     console.log("user registered")
//     res.send(result);

//login route

// app.post('/signin', async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return res.status(400).json({ error: "PLZ fill the input fields" })
//         }
//         const userlogin = await Register.findOne({ email: email });
//         const isMatch = await bcrypt.compare(password, userlogin.password);

//         if (!isMatch) {
//             return res.status(400).json({ message: "User not found" });
//         } else {
//             return res.status(200).json({ message: "Siginin Successfully" });
//         }


//     } catch (err) {
//         console.log(err)
//     }
// })



app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ error: "PLZ fill the input fields" })
    }
    const userLogin = await Register.findOne({ email: email })
    if (userLogin) {
        const match = await bcrypt.compare(password, userLogin.password)
        token = await userLogin.generateAuthToken()
        res.cookie("jwtoken",token,{
            expires:new Date(Date.now()+25892000000),
            httpOnly:true
        })
        if (!match) {
            res.status(400).json({ message: "Invalid Credentials" })
        } else {
            const result = {
                userLogin,
                token
            }
            res.status(201).json({status:201,result})
            // res.json({message:"User Signin Succesfully",result})

        }
       
    } else {
        res.status(400).json({ message: "invalid credentials" })
    }


})





//route for all registered users
app.get('/users-detail', async (req, res) => {
    const user = await Register.find();
    if (user.length > 0) {
        res.send(user);
    } else {
        res.send({ message: "No Data Found" })
    }

})



//add product route for admin
app.post("/add-product", upload.single("pimage"), async (req, res) => {
    const { filename } = req.file;
    const { pname, pcategory, pprice } = req.body;
    if (!pname || !pcategory || !pprice  ) {
        res.status(401).json({ status: 401, message: "fill all the data" })
    }
    try {
        const prod = new Products({
            pname: pname,
            pcategory: pcategory,
            pprice: pprice,
            pimage: filename,
        });
        const finaldata = await prod.save();
        res.status(201).json({ status: 201, finaldata });
    } catch (error) {
        res.status(401).json({ status: 401, error })
    }
});


// for single page
app.get('/all-products/:id',async (req,res)=>{
    let result = await Products.findOne({_id:req.params.id})
    if(result){
        res.send(result)
    }else{
        res.send("NO Data FOund")
    }
    
})




//route for getting products
app.get('/all-products', async (req, res) => {
    const prod = await Products.find();

    
    if (prod.length > 0) {
        res.send(prod)
    } else {
        res.send({ "message": "No Products Found" })
    }
})

//this is sample api for getting products based on categories
app.get('/all-product', async (req, res) => {
    try {
        const prod = await Products.find({pcategory:"mens"});

    
    if (prod.length > 0) {
        res.send(prod)
    } else {
        res.send({ "message": "No Products Found" })
    }
        
    } catch (err) {
        console.log(err)
        
    }
})







//for edit products
app.get('/product/:id',async(req,res)=>{
    let result = await Products.findOne({_id:req.params.id})
    if(result){
        res.send(result)
    }else{
        res.send({message:"Nothing Found"})
    }
})



//for update
app.put('/product/:id', upload.single("pimage"),async(req,res)=>{
   

    

    let result =await Products.updateOne(
        {_id:req.params.id},
        {
            $set:req.body,
                
            
        }

        )
        res.send(result)
})








//checkout form info route




app.post('/checkout', async (req, res) => {
    const chekout = new Checkout(req.body);
    const result = await chekout.save();
    res.send(result);
})













// for deleting user
app.delete("/user/:id", async (req, resp) => {
    let result = await Register.deleteOne({ _id: req.params.id });
    resp.send(result)
}),


























    app.listen(5000, () => console.log("My Server Started at PORT 5000"))






























