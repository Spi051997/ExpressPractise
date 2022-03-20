// var express = require("express");
// const path = require("path");

// var port = 8000;

// var app = express();

// const contact_List = [
//   {
//     name: "Shubham",
//     contact: "9527750890",
//   },
//   {
//     name: "Shreya",
//     contact: "95277508",
//   },
//   {
//     name: "Shreya",
//     contact: "95277508",
//   },
// ];

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// // app.get("/", (req, res) => {
// //   return res.render("home", { title: "I am Shubham" });
// // });

// app.get('/',(req,res)=>
// {
//   // res.send('Hello');
//   return res.render("home",{
//     title:"Home"
//   });
// });

// app.get("/practise", (req, res) => {
//   return res.render("contact", {
//     title: "Contact Phone",
//     contact: contact_List
//   });
// });

// app.listen(port, (err) => {
//   if (err) {
//     console.log("Error", err);
//   }

//   console.log("Yey the server  is up");
// });

const express=require('express');
const app=express();
const path=require('path');
const port=4002;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded())

//accessing the static files

app.use(express.static('assets'));
// app.use((req,res,next)=>
// {
//   console.log('Middleware 1');
//   next();
// })

// app.use((req,res,next)=>
// {
//   console.log('Middeware 2');
//   next();
// })


var contact_list=[
{
  name:"Shubham",
  contact:"088888876"
},
{
  name:"Shreya",
  contact:"0878656"
},
{
  name:"Shruti",
  contact:"0890567" 
}

]

app.get('/contact',(req,res)=>
{
    return res.render("contact",{
      title:"Contact List",
      contact:contact_list
    })
})




app.post('/create-contact',(req,res)=>
{

  contact_list.push({
    name:req.body.name,
    contact:req.body.contact
  });

    return res.redirect('back');


    //  console.log(req.body);
  // return res.redirect("/contact")
 
})


app.get('/delete-contact/:contact',(req,res)=>
{
   console.log(req.params);
   let phone=req.params.contact;

   let createIndex=contact_list.findIndex(contact=>contact.contact==phone)

   if(createIndex!=-1)
   {
     contact_list.splice(createIndex,1);
   }

   return res.redirect('back');
})


app.listen(port,()=>console.log('Server is up',port))


