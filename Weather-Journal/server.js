// express, name, body-parser, and cors installed into project directory - 12/18/2020

// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
//const { getPackedSettings } = require('http2');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;


// Setup Server
const server = app.listen(port, listening);
function listening(){
    console.log("The Weather-Journal Server is running, my dudes!"); 
    console.log(`Using localhost: ${port}`);
};

// array to hold data;
const data = [];
// Routes
// Get Route pulls projectData
app.get('/all', function (req, res) {
    res.send(projectData);
})
// Post Route adds data to ProjectData
app.post('/add', function (req, res) {
    const newPost = {

    }
})

