var possibleChoice = ["Rock","Scissor","Paper"];
var userChoice = Math.floor(Math.random() * possibleChoice.length) ;
var computerChoice = Math.floor(Math.random() * possibleChoice.length);
console.log( "Computer choice:" + possibleChoice[computerChoice]);
console.log( "User choice:" + possibleChoice[userChoice]);

var gameRules = play;
function play (){
possibleChoice[0] > possibleChoice[1]
possibleChoice[0] < possibleChoice[2]
possibleChoice[1] > possibleChoice[2]
possibleChoice[2] > possibleChoice[0]
possibleChoice[1] < possibleChoice[0]
possibleChoice[2] < possibleChoice[1]
}
if(userChoice < computerChoice){
    console.log("User win!");
} else if(userChoice > computerChoice){
    console.log("Computer win!");
}else {
    console.log("It's a draw");
}

