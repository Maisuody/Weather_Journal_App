# Weather-Journal App Project

## Overview
This project requires you to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

## Instructions
This will require modifying the `server.js` file and the `website/app.js` file. You can see `index.html` for element references, and once you are finished with the project steps, you can use `style.css` to style your application to customized perfection.

## Node and Express Environemnt
Node and Express should be installed on the local machine. The project file server.js should require express(), and should create an instance of their app using express.
The Express app instance should be pointed to the project folder with .html, .css, and .js files.

## Project Dependencies
The ‘cors’ package should be installed in the project from the command line, required in the project file server.js, and the instance of the app should be setup to use cors().

The body-parser package should be installed and included in the project.

## APIs and Routes
###### APP API Endpoint
There should be a JavaScript Object named projectData initiated in the file server.jsto act as the app API endpoint.
###### Integrating OpenWeatherMap API
The personal API Key for OpenWeatherMap API is saved in a named const variable.
The API Key variable is passed as a parameter to fetch() .
Data is successfully returned from the external API. 

## Dynamically Update UI
Sets the properties of existing HTML elements from the DOM using Vanilla JavaScript.
Included in the async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.