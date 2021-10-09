const { string, required } = require('@hapi/joi');
const { name } = require('ejs');
const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const urlSchema= new mongoose.Schema(
{
    name: {type: String , required : true},
    url : {type: String, required:true },
    protocol: {type: String, required:true },
    path : {type: String},
    port:  {type: Number},
    webhock:  {type: String},
    timeout:  {type: Number},
    interval:  {type: Number },
    thershold:  {type: String},
    authentication:  {type: String },
    httpHeader:  {type: String},
    assert:  {type: String },
    tags:   {type: String},
    ignoreSSL: {type: String },
    //userID:{type:mongoose.Schema.Types.ObjectId , ref:'User'},
}
)
module.exports = mongoose.model('urlCheck' , urlSchema);