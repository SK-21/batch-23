const mongoose = require("mongoose");

const DB_URL = "mongodb+srv://admin:admin@cluster0.itwhyjy.mongodb.net/";


mongoose.connect(DB_URL).then(data=>{
    console.log("Connected to DB Successfully!!!");
}).catch(err=>{
    console.error(err);
})
