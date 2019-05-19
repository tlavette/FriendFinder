// list dependancies; express for routes, body parser to GET JSON formatted data.
const express = require('express');
var bodyParser = require('body-parser');

// start express server
const app = express();
var PORT = process.env.PORT || 8080;

// Send "Hello World to confirm sending of root on port" 
app.get('/', function (req, res) {
  res.send('Server set up complete');
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
 
app.use(function (req, res) {
  res.setHeader('Content-Type', 'text/plain')
  res.write('you posted:\n')
  res.end(JSON.stringify(req.body, null, 2))
})

// start listener
app.listen(PORT, function(){
    console.log("App is listening on PORT: " + PORT);
});

