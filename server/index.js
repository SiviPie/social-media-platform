const express = require('express');
require("./db/mongoose.js");

const app = express();
app.use(express.json());
let cors = require("cors");
app.use(cors({
    origin: "*",
}));
const PORT = 3001;
const categoryRoute = require('./routes/category.js')
const postRoute = require('./routes/post.js')
const userRoute = require('./routes/user')
app.use(categoryRoute);
app.use(postRoute);
app.use(userRoute);
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occured, server can't start", error);
    }
);