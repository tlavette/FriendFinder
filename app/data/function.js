
let newFriend = [
    {

        "name": "George",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [5,1,3,4,1,1,2,1,4,1]
            
    }
];

//###############################################################################################

let friends = [
    {
        "name": "Ahmed",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [5,3,4,5,2,4,3,1,2]
           
    },

    {

        "name": "George",
        "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores": [5,1,3,4,1,1,2,1,4,1]
            
    }
];
// newFriend[0].scores[i] and friends[0].scores[i]
function compare(array1,array2){
const finalarray=[];

array1.forEach((e1)=>array2.forEach((e2)=>
{if(e1 === e2){
        finalarray.push(e1);
    }
}
));
}




    
