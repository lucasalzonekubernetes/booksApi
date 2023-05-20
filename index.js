
//IMPORT 
const express = require('express');
const bodyParser = require("body-parser");
const cors = require('cors');
const path = require('path');

//DEFINE EXPRESS APP & PORT
const app = express();
const host = process.env.HOST || 'localhost';
const protocol = process.env.PROTOCOL || 'http';
const port = process.env.PORT || 3000;

//ADD MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors({origin:'*'}));

// METHODS OF API
//--- HEALT-CHECK
app.get('/health', (req, res) => {
    console.log("HEALTH CHECK");
    res.status(200).send("service running");
});

//--- HOME
app.get('/', (req, res) => {
    console.log("HOME PAGE");
    res.status(200).sendFile(path.join(__dirname, '/www/index.html'));
});

//AVVIO SERVER
console.log("ENVIRONMENT VARIABLES--------------------");
console.log(" - HOST       :'"+ host +"'\n - PORT       :'"+port);
console.log("-----------------------------------------");
app.listen(port, () => {
    console.log(`Services listening at ${protocol}://${host}:${port}`)
    console.log("--> /home     : Home page");
    console.log("--> /health   : health check servizio");
})