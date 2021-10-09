var express = require('express');
const indexRouter = require('./routes/index');
var mongoose = require('mongoose');
const dotenv=require('dotenv');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
const exp = require('constants');
const app = express();




dotenv.config();

//connect to mongoDB  
mongoose.connect(process.env.DB_CONNECT)
.then(()=>console.log('Connected!'))
.catch((error) => {
    console.log('error');
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//Middleware 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Route middleware
app.use(indexRouter);


app.listen('3000' , ()=>console.log('Server running on 3000'));