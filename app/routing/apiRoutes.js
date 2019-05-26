// This file will handle api data api routes.
// Check this resource to add this route. https://expressjs.com/en/resources/middleware/body-parser.html
var path = require('path');
var friendList = require("../data/friends");



module.exports = function (app) {

    // Display all possible friends
    app.get('/api/friends', function (req, res) {
        res.json(friendList);


    });

    // POST route to handle incoming surveys
    app.post('/api/friends', function (req, res) {
    const addFriend = req.body;
    console.log(addFriend);
        res.json(addFriend);
    });

}

    //     // declare variable for best match object.
    //     var bestMatch = '{}';
    //     // declare variable for match score.
    //     var matchScore = 50;
    //     // loop through friend list.
    //         for (var i =0; i<friendList.length; i++){
    //             var tempMatch = 0;
    //             if tempMatch < matchScore{
    //                 bestMatch(tempMatch)
    //             }
    //         }res.json(bestMatch);
    //     }

        // loop through scores array.
        // assign value to temp match score.
        // if temp match score is lower than match score,
        // best match object is current friend.
        // res.json(best match object);3
        // friendList.push(addFriend);

        



    


