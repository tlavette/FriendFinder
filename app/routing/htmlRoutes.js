// This file will handle html routes to our pages, survey and back to home.
var path = require ('path');

module.exports = function(app) {

    // the get request for the survey html file.  Responds with a sendFile to the directory file
    app.get('/survey', function(req, res){
        res.sendFile(path.join(__dirname + '/../public/survey.html'));

    });

    app.use(function(req, res){
        res.sendFile(path.join(__dirname + '/../public/home.html'));

    });

}