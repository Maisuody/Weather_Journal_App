// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Express to run server and routes

const express = require('express');

// Start up an instance of app
const app = express();

/* Dependencies */
const bodyParser = require('body-parser')
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
// Spin up the server
const port = 3000;
const server = app.listen(port, listening);
function listening(){
     console.log("server running"); 
     console.log(`running on localhost: {$port}`);
}



////////////////API//////////////////
//API Calls
//api.openweathermap.org/data/2.5/weather?zip={zip code},{country code}&appid={API key}
//api.openweathermap.org/data/2.5/find?q=London&units=metric
//api.openweathermap.org/data/2.5/find?zip={zip code}&units=metric

// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'
app.get('/all', sendData);


function sendData (request, response) {
  response.send(projectData);
};


// Post Route