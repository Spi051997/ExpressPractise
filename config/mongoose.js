
//require monggose
// const mongoose=require('mongoose');

// //  give connection to url
// mongoose.connect('mongodb://localhost:27017/contact_list');

// const  db=mongoose.connection;

// db.on('error',console.error.bind(console,'error while connecting to the server'))

// db.once('open',()=>{

//     console.log('Sucessfully Registeed')
// })



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://admin:admin@cluster0.7pkpp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect().then(()=>
{
    console.log('Sucessful')
}).catch(()=>
{
    console.log('Error');
})