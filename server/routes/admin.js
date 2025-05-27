const express = require("express");
const router = express.Router();
const Post = require("../models/Post.js");
const User = require("../models/User.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const adminLayout  = "../views/layouts/admin";


const authMiddleware = (req,res,next)=>{
  const token = req.cookies.token;
  if(!token){
    return res.status(401).json({message:"Unauthorie"});
  }

  try{
   const decoded = jwt.verify(token, "Keyboard cat");
   req.userId = decoded.userId;
   next();
  }catch(err){
    return res.status(401).json({message:"Unauthorie"});
  }
};

router.get("/admin",async (req,res)=>{
    try{
    const locals = {
        title:"Admin",
        description: "Simple blog created with NodeJs, Express and MongoDB"
    }
    const data = Post.find();
   res.render('admin/index',{locals,layout: adminLayout});
   }catch(err){
    console.log(err);
   }
});


router.post("/admin",async (req,res)=>{
    try{
    
   const {username, password} = req.body;
    const user = await User.findOne({username:username});
     if(!user){
        res.status(401).json({message: "Invalid credentials"});
     }
     const isPassValid = await bcrypt.compare(password,user.password);

     if(!isPassValid){
        res.status(401).json({message: "Invalid credentials"});
     };

     const token = jwt.sign({userId: user._id},"Keyboard cat");
     res.cookie("token",token,{httpOnly:true});

     res.redirect("/dashboard");
   }catch(err){
    console.log(err);
   }
});


router.get("/dashboard",authMiddleware,async (req,res)=>{

  try{
     const locals = {
        title:"Dashboard",
        description: "Simple blog created with NodeJs, Express and MongoDB"
    }
   const data = await Post.find();
   res.render("admin/dashboard",{data,locals,layout:adminLayout});
  }catch(err){
   console.log(err);
  } 
});



router.get("/add-post",authMiddleware,async (req,res)=>{

  try{
     const locals = {
        title:"Add Post",
        description: "Simple blog created with NodeJs, Express and MongoDB"
    }
   const data = await Post.find();
   res.render("admin/add-post",{locals,layout:adminLayout});
  }catch(err){
   console.log(err);
  } 
});


router.post("/add-post",authMiddleware,async (req,res)=>{

  try{
    try{
     const newPost = new Post(
      {title: req.body.title,
        body: req.body.body
      }
     );
     await newPost.save();
     res.redirect("/dashboard")
    }catch(err){
      console.log(err);
    }
    
  }catch(err){
   console.log(err);
  } 
});


router.get("/edit-post/:id",authMiddleware,async (req,res)=>{

  try{
    const locals = {
        title:"Edit Post",
        description: "Simple blog created with NodeJs, Express and MongoDB"
    }
   
   const data = await Post.findOne({_id:req.params.id});
   res.render("admin/edit-post",{data,locals,
    layout:adminLayout
   }) 
   
  }catch(err){
   console.log(err);
  } 
});


router.put("/edit-post/:id",authMiddleware,async (req,res)=>{

  try{
   await Post.findByIdAndUpdate(req.params.id, {
     title: req.body.title,
     body: req.body.body,
     updatedAt: Date.now()
   });  
   res.redirect(`/edit-post/${req.params.id}`);
  }catch(err){
   console.log(err);
  } 
});




// router.post("/admin",async (req,res)=>{
//     try{
    
//    const {username, password} = req.body;
    
//    }catch(err){
//     console.log(err);
//    }
// });


router.post("/register",async (req,res)=>{
    try{
    
   const {username, password} = req.body;
    
   const  hashedPassword = await bcrypt.hash(password,10);
   try{
   const user = await User.create({username,password: hashedPassword});
   res.redirect("/admin");
   res.status(201).json({message: "User created",user});
   }catch(err){
   if(err.code === 11000){
    res.status(409).json({message:"User already in use"});
   }
   res.status(5000).json({message:"Internal server error"});
   }
   }catch(err){
    console.log(err);
   }
});



router.delete("/delete-post/:id",authMiddleware,async (req,res)=>{
  
  try{
    await Post.findByIdAndDelete({_id:req.params.id});
    res.redirect("/dashboard");
  }catch(err){
    console.log(err);
}
});


router.get("/logout",(req,res)=>{
  res.clearCookie("token");
  // res.json({message: "Logout Successfull"});
  res.redirect("/");
});



module.exports = router;