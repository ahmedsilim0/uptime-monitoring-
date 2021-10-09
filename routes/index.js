const router = require('express').Router();
const jwt =require('jsonwebtoken');
const User =require('../models/User');
const bcrypt = require('bcryptjs');
const {registerValidation,loginValidation} =require('../validation') ;
const index_controller = require('../controllers/indexController');
const urlControllers= require('../controllers/urlControllers');
const reportControllers = require('../controllers/reportControllers');
var _ = require('lodash/core');
//global.uEmail='';//to get user email

//home 
router.get('/' ,index_controller.get_home);

//welcome
router.get('/welcome' ,index_controller.get_welcome);

//about
router.get('/about' ,index_controller.get_about );

router.get('/logout', index_controller.user_logout_get);
router.post('/welcome',urlControllers.post_url );

//login & registeration
router.get('/signup' ,index_controller.get_signup);
router.get('/login' ,index_controller.get_login);


//dashboard
router.get('/dashboard',reportControllers.get_report);
//---------



//bad practise 
router.post('/signup' ,async (req,res,next)=>
{
   //validation first
   //const error = registerValidation(req.body);

    //check if the user already in database
    const emailExist =await User.findOne({email:req.body.email});
    if(emailExist)
        return res.status(400).send('Eamil already exits');

    //hash password
    const salt  = await bcrypt.genSalt(10);
    const hashedPassword  = await bcrypt.hash(req.body.password , salt);
   //create new user
    const user = new User(
        {
            name:req.body.name,
            email:req.body.email,
            password:hashedPassword,
            
        }
    )
    user.save((err) => {
        if (err) return next(err);
        
        res.redirect("/login");
      })
    // try{
    //     const savedUser= await user.save();
    //     res.send(savedUser);
    // }catch(err)
    // {
    //     res.status(400).send(err);
    // }
})

//log in (email and password)

//------
router.post('/login'  , async (req,res)=>{
     //validation first
    //const error = loginValidation(req.body);

    //check if the user already in database
    const user =await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send('Email is not correct');
 
    //password is correct
    const validPass= await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('Password is not correct');
     
    
    //confirmation
    //if(!user.confirmed) return res.status(400).send('please confirm the email')
    
    //const userName=req.body.name;
    //create and assign a token
    const token  = jwt.sign({_id:user._id} , process.env.TOKEN_SECRET);
     //uEmail=user;
     res.redirect('/welcome');
     //res.send('loggedin!!');
    //res.render('welcome',{name:userName});
    //res.header('auth-token' , token).send(token);
     

    

});
//---------------------------------------------------------------------------------
module.exports=router;