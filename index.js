

// const { name } = require("ejs");
const express = require("express");

const path = require("path");
const port = 3001;

const db = require("./config/mongoose");
const Contact = require("./model/contact");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded());

//accessing the static files

app.use(express.static("assets"));

// var contact_list = [
//   {
//     name: "Shubham",
//     contact: "088888876",
//   },
//   {
//     name: "Shreya",
//     contact: "0878656",
//   },
//   {
//     name: "Shruti",
//     contact: "0890567",
//   },
// ];

// to get data from Db
app.get("/contact", (req, res) => {

       Contact.find({},(err,contact)=>
       {
          if(err)
          {
            console.log("Error occcured")
            return;
          } 

          return res.render("contact", {
    title: "Contact List",
    contact: contact,
  });
       }
       
       
       
       )
  
});

//  push data into DB
app.post("/create-contact", (req, res) => {
  // contact_list.push({
  //   name:req.body.name,
  //   contact:req.body.contact
  // });
  

  console.log(Contact)
  Contact.create({
    name:req.body.name,
    contact:req.body.contact
   
  },(err,newContact)=>
  {
      if(err)
      {
        console.log("Error");
        return ;
      }

      console.log('*****',newContact);
      return res.redirect("back");
    // console.log(name);
    // console.log(contact)
  });
  
});

app.get("/delete-contact", (req, res) => {

   let id=req.query.id;
  //   below is the source id point
  //  console.log(req.query.id);
  //  console.log(id);

   Contact.findByIdAndDelete(id,(err)=>
   {
     if(err)
     {
       console.log("Error while Deleting the records")
       return;
     }

    //  return res.redirect("back");
   });


   return res.redirect("back");

       

});

app.listen(port, () => console.log("Server is up", port));
