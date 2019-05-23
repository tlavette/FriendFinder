
// friends[0].scores[i]
// index <---> comparison, will need to loop to the end. And then generate a "value".
// This value (comparisonArray[1,4,6,7,4,3,4]) function----> for the lowest value  *
// process of elimination. Evaluate them and eliminate them as it goes through the array. "king of the hill"
let friends = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [5,1,4,4,5,1,2,5,4,1]
      
    },

    {

        "name": "George",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [5,1,3,4,1,1,2,1,4,1]     
    }
];

// add more objects and add a function that will
// 1 Create a function that will evaluate the array(scores) of each object and perform a comparison.





// This allows me to use or require this data in other js files.
module.exports = friends;