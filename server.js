// list dependancies; express for routes, body parser to GET JSON formatted data.
const express = require('express');
var bodyParser = require('body-parser');
const http = require('http');



// start express server
var app = express();
var PORT = process.env.PORT || 8080;

// Send message to confirm sending of root on port" 
// app.get('/', function (req, res) {
//   res.send('Server set up complete');
// })

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(express.static("./app/public"))


 

require('./app/routing/htmlRoutes.js')(app);
require('./app/routing/apiRoutes.js')(app);



// start listener
app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
});

