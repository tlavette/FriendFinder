// This file will handle api data api routes.
// Check this resource to add this route. https://expressjs.com/en/resources/middleware/body-parser.html
var path = require('path');
var friendList = require("../data/friends");



module.exports = function (app) {

    // Display all possible friends
    app.get('/api/friends', function (req, res) {
        res.json(friendList);


    });

    // POST route to handle incoming surveys. Logic to find friend can go here with POST.
    app.post('/api/friends', function (req, res) {
        const addFriend = req.body;

        function compare(friendList, addFriend) {
            console.log("before", addFriend);
            addFriend = addFriend.map(Number);
            console.log(addFriend);
        }
        compare(friendList, addFriend);
        console.log(addFriend);
        res.json(addFriend);
    });

}

    


// JSBIN testing completed.  The plan is to incorporate these functions into 
// Segmented functions for the purpose of learning. Submitting due to time.

//  COPY AND PASTE THIS TO JSBIN - 
// function compareScore(array1, array2){
//     absArray= [];
//     let sumArray = 0
  
//     for(let i=0; i<array1.length; i++){
//       absArray.push(Math.abs(array1[i] -array2[i]));
//       sumArray  += absArray[i];
//     }
//     console.log(sumArray);
//     console.log(absArray);
      
      
//     return sumArray;
   
//   }
  
//   addFriend = [2, 2, 2, 2, 3, 3, 3, 3, 3, 3];
  
//   Friends = [
//     [5,1,4,4,5,1,2,5,4,1],
//     [2, 4, 2, 3, 4, 1, 2, 4, 1, 1],
//     [5,1,3,4,1,1,2,1,4,1]
    
//   ];
  
//   const matchFriend = [];
//   let bestMatchIndex = -1;
//   let minScore = 100; 
//   for(let i = 0; i< Friends.length; i++){
//     matchFriend.push(compareScore(addFriend, Friends[i]));
//     if(minScore > matchFriend[i]){
//       minScore = matchFriend[i];
//       bestMatchIndex = i;
//     }
//   }
  
//   console.log(matchFriend);
//   console.log(bestMatchIndex);
//   console.log('best friends '+ Friends[bestMatchIndex]);
  
  
  
  
  
  
//   // THIS IS FROM THE APPLICATION, THE FRIENDS ARE EXISTING, ADD FRIEND IS NEW
//   var friends = [
//     {"name":"Ahmed",
//      "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//      "scores":[5,1,4,4,5,1,2,5,4,1]},
    
//     {"name":"George",
//      "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
//      "scores":[5,1,3,4,1,1,2,1,4,1]}]
  
  
//   var addFriend = {
//     name: 'Tonja',
//     photo: 'https://www.bootcampspot.com/login',
//     'scores': [ '2', '2', '2', '2', '3', '3', '3', '3', '3', '3' ] }
  
  
  
//   // THIS FUNCTION ALLOWS ME TO ADD THE FRIEND AND CONVERT STRING TO NUMBER AND OUTPUT
//   // 2 ARRAYS, ONE ARRAY FROM FRIENDS, THE OTHER ARRAY FROM ADDFRIEND.
//   // LINE 2 AND 3 OF CONSOLE OUTPUT
  
//   function compare(friends, addFriend){
    
//     var addFriend = addFriend.map(Number);
    
//     console.log(addFriend);
//     console.log(friends);
    
    
    
//   };
  
//   compare(friends[1].scores, addFriend.scores);
  
  

