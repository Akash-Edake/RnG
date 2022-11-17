//initialize server
const express = require('express');
const app = express();

//import mongoose
const mongoose= require("mongoose");

//sending data in json fromat
app.use(express.json())

//cross origin
const cors= require("cors");
app.use(cors());

//import bcryptjs
const bcrypt= require("bcryptjs");
//connnect to mongoDB
const mongoURL= "mongodb+srv://Dhanashri:Dhanashri@cluster0.cyirr5a.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(mongoURL,{
    useNewUrlParser :true
}).then(()=>{console.log("connected to database")})
.catch((e)=>console.log(e));

// making api
require("./userDetails");
const user = mongoose.model("userInfo");

app.post("/register", async(req, res)=>{
    console.log(req.body);
    const {fname, lname, email, password} = req.body;
    // console.log(fname,lname, email, password);
     const encrptPassword= await bcrypt.hash(password, 10);
    try {
        const oldUser= await user.findOne({email});      //check either user exist or not
        if(oldUser){
           return res.json({error: "user Exist"});
        }
       await user.create({            //create new user in mongoDB
        fname,
        lname,
        email,
        password : encrptPassword,
       });
       res.send({status:"ok"})
  } catch (error) {
    res.send({status:"error"});
  } 
})

app.listen(5000, ()=>{
    console.log("server started");
})




//making api
// app.post("/post", async(req, res)=>{
//     console.log(req.body);
//     const {data} = req.body;
//   try {
//     if(data == "Dhanashri"){
//         res.send({status:"ok"});   //response from server
//     }
//     else{
//         res.send({status:"user not found"});
//     }
//   } catch (error) {
//     res.send({status:"something went wrong try again"});
//   }
  
// })

//import mongodb

// require("./userDetails");

// const user = mongoose.model("userInfo"); 
// app.post("/register", async(req, res)=>{
//     const {name, email, phoneNo}= req.body;
//     try{
//         await user.create({
//             uname: name,
//             email,
//             phoneNo
//         })
//         res.send({status: "ok"})
//     }catch(error){
//         res.send({status: "error"})
//     }
// })