const express = require("express");
const router = express.Router();





router.get("",(req,res)=>{
    const locals = {
        title : "Nodejs Blog",
        description : "Simple blog created with mongo,express and node"
    }
    res.render("index",{locals});
});

router.get("/about",(req,res)=>{
    res.render("about");
});
module.exports = router;