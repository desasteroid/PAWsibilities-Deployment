const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");
const Adoption =require("../models/adoptionModel");
const Review =require("../models/reviewModel");
const auth = require("../middleware/auth");
require("dotenv").config();

router.post("/signup",async (req,res) => {
    try {
        let {username , password , name , email,address , city, phone_number} = req.body;

        //validate
        if(!username || !password || !name || !email || !address ||!city || !phone_number)
            return res.status(400).json({msg: "Not all fields have been entered"});

        if(password.length < 5)
            return res.status(400).json({msg: "The Password needs to be atleast 5 characters long"});

        const exsistingUser = await User.findOne({ email: email});
        if(exsistingUser)
            return res.status(400).json({msg: "An account with this email already exists"});

        const exsistingUsername = await User.findOne({ username: username});
        if(exsistingUsername)
            return res.status(400).json({msg: "An account with this username already exists"});

        //hashing the password
        const salt = await bcrypt.genSalt(10);
        const passwordHash = await bcrypt.hash(password, salt);
        
        //saving the new user into the database
        const newUser = new User({
            username,
            password:passwordHash,
            name,
            email,
            address,
            city,
            phone_number

        });

        const savedUser = await newUser.save();
        res.json(savedUser);
    
    } catch (err) {
        res.status(500).json({error : err.message});
    }

});

router.post("/login",async (req,res) =>{
    try{
        let {username , password } = req.body;

        //validate
        if(!username || !password)
            return res.status(400).json({msg: "Not all fields have been entered"}); 

        const user =await User.findOne({ username: username});
        if(!user)
            return res.status(400).json({msg: "No account with this username has been registered"});   

        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch) return res.status(400).json({msg: "Invalid credentials"}); 

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.json({
            token,
            user: {
                id: user._id,
                username : user.username
            }
        });

    } catch (err) {
        res.status(500).json({error : err.message});
    }


});

router.post("/tokenisValid",async (req,res) => {
    try {
        const token = req.header("x-auth-token");
        if(!token) return res.json(false);

        const verified = jwt.verify(token,process.env.JWT_SECRET);
        if(!verified)
            return res.json(false);

        const user = await User.findById(verified.id);
        if(!user) return res.json(false);

        return res.json(true);


    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

router.get("/",auth, async (req,res) =>{
    const user = await User.findById(req.user);
    res.json({
        username: user.username,
        id: user._id,
        name:user.name
    });
});

router.post("/donate" ,async (req,res) =>{
    try{
        let {username , name, phone_number,address, petname,category,age,description,kind } = req.body;

        //validate
        if(!username || !name || !phone_number|| !address ||!petname || !category ||!age || !description || !kind)
            return res.status(400).json({msg: "Not all fields have been entered"});

        const user =await User.findOne({ username: username});
        if(!user)
            return res.status(400).json({msg: "No account with this username has been registered"});

        //saving the new donate request into the database
        const newDonate = new Adoption({
            username,
            name,
            phone_number,
            address,
            petname,
            category,
            age,
            description,
            kind


        });

        const savedAdoption = await newDonate.save();
        res.json(savedAdoption);    
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

router.get("/adopt", async(req,res) =>{
    try{
    const details = await Adoption.find({});
    res.json(details);
    }catch (err) {
        res.status(500).json({error : err.message});
    }
});

router.post("/dashboard", async (req,res) =>{
    try{
        let { uname } =req.body;
        console.log(uname);
        const donation_details = await Adoption.find({username:uname});
        res.json(donation_details);

    }catch (err) {
        res.status(500).json({error : err.message});
    }
});

router.post("/delete", async (req,res) =>{
    try{
        let { _id } =req.body;
        const response = await Adoption.deleteOne({_id:_id});
        res.json(response);
    }catch (err) {
        res.status(500).json({error : err.message});
    }
});

router.post("/review", async (req,res) =>{
    try{
        let { firstname, lastname, think, improve,suggestion } =req.body;
            
        //validate
        if(!firstname || !lastname || !think|| !improve ||!suggestion)
            return res.status(400).json({msg: "Not all fields have been entered"});
        
        //saving the new review to the data base
        const newReview = new Review({
            firstname,
            lastname,
            think,
            improve,
            suggestion
        });
        const savedReview = await newReview.save();
        res.json(savedReview);
    
    } catch (err) {
        res.status(500).json({error : err.message});
    }
});

module.exports = router;