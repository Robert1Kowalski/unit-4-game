//1A) A game with 4 crystals and 1bB randomResult
// 2) every crystal needs to have a random number between 1-12
// 3) A new number should be generated everytime we win or lost, to those 4 crystals 
// 4) When clicking any CRYSTAL, it should be adding with the previous result until it equals to the total score
// 5)If it is greater than the random result, then we lost and decrememt a lost counter
//       If it is equal, then we increment a win counter










// create random result, lost, win variables 
var random_result;
var lost = 0;
var win = 0; 
var previous = 0; // used in on.click funciton




//1A) build 4 crystals
//1B) build randomResult
// 2) create randomNumber
//3) Build target random_Result
var startResetGame = function () {
    $(".crystals").empty();  // empty the function each time it runs 
    var images = [ 
    "assets/images/crystal-one.png",
    "assets/images/crystal-2.png",
    "assets/images/crystal-three.png",
    "assets/images/crystal-four.png" ]

    random_result = Math.floor(Math.random() * 120) + 19;

console.log(random_result)
$("#result").html('Random Result: ' + random_result)



// 2) create randomNumber
for (var i = 0; i < 4; i++) {

    var randomNumber = Math.floor(Math.random() * 12) + 1; // built out randomNumber generator, will asign a randomNumber to each div

    var crystal = $("<div>");
    crystal.attr({
        "class": 'crystal',
        "data-random": randomNumber,
         //assigned dataRandom to each of the divs
    });
    crystal.css({
        "background-image":"url(' " + images[i] + " ')",
        "background-size": "cover"

    })


    

    $(".crystals").append(crystal);  //this should put 4 divs into "crystal" div on html
    
}
$("#previous").html("Total Score: "  + previous)

}

startResetGame();





//4) Create a click event that adds previous total to new amount 
//5 Built the if/else statement -- if 






$(document).on('click', ".crystal",  function () {  

    var num =  parseInt($(this).attr('data-random')); // create a varible to store the number, add parseint to convert the strings to numbers 

    previous += num;


    $("#previous").html("Total Score: " + previous)
    
 
    

    if (previous > random_result){
        lost ++; 
        $("#lost").html("You Lost: " + lost); //creates counter on html
         previous = 0;  // have to use event delegation and set previous = zero b/c button stops working                                             after the first 
    
       startResetGame();
    }
    else if (previous === random_result){
        win ++; 
        $("#win").html("You won: " + win);
        previous = 0;
        
        startResetGame();

    }
}) 


    

    //console.log($(this).attr('data-random')       //we set a value called datarandom, and we want the value associated with dataRandom (ge nerated by our randomNumber). the .attr will get the value from datavalue, and then "this" console logs the value on the click 



 
