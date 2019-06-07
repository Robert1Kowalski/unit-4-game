//a game with 4 crystals and randomResult
//every crystal needs to have a random number between 1-12
//A new number should be generated everytime we win or lost, to those 4 crystals 
//When clicking any CRYSTAL, it should be adding with the previous result until it equals to the total score
//If it is greater than the random result, then we lost and decrememt a lost counter
//If it is equal, then we increment a win counter

// 1a) create random result, lost, win
var random_result;
var lost;
var win;

// 1b ) build 4 crystals
// 2) create randomNumber
for (var i = 0; i < 4; i++) {

    var  randomNumber = Math.floor(Math.random () * 12); // built out randomNumber generator
    console.log(randomNumber)
    var crystal = $("<div>");
    crystal.attr("class", 'crystal'); //

    $(".crystals").append(crystal);  //this should put 4 divs into "crystal" div on html
}


