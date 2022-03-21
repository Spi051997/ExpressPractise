const mongoose=require('mongoose');

// need to create schema

const contactSchema=new mongoose.Schema({
    
    name:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    }


});

const Contact=mongoose.model('contact',contactSchema);

module.exports=Contact;