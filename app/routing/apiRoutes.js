// This file will handle api data api routes.
// Check this resource to add this route. https://expressjs.com/en/resources/middleware/body-parser.html
var path = require ('path');
var friendList = require("../data/friends");



module.exports = function(app){

// Display all possible friends
app.get('/api/data/friends', function (req, res) {
    res.json(friendList);


});

// POST route to handle incoming surveys
app.post('/api/data/friends', function (req, res) {
    const addFriend = req.body;
    friendList.push(addFriend);

    res.json(addFriend);
    console.log("addFriend");


});

}
