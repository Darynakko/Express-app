// Set up express
const express = require("express");
const app = express();
const port = 8000; 

//router module
const mainRoutes = require('./routes/main')

//load router
app.use('/', mainRoutes)
// Start listening for HTTP requests
app.listen(port, 
    () => console.log(`Node server is running on port ${port}...`)); 
