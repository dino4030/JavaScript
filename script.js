var arr = ["Rock", "Paper", "Scissor"];
var computerChoice = Math.floor(Math.random() * arr.length);
var userChoice = Math.floor(Math.random() * arr.length);
console.log("Computer choice:" + arr[computerChoice]);
console.log("User choice:" + arr[userChoice]);

if (arr[computerChoice] === "Rock" && arr[userChoice] === "Paper"){
    arr[0] < arr[1]
    console.log("User win!");
}
if(arr[computerChoice] === "Rock" && arr[userChoice] === "Scissor"){
    arr[0] > arr[2]
    console.log("Computer win!");
}
if(arr[computerChoice] === "Paper" && arr[userChoice] === "Rock"){
    arr[1] > arr[0]
    console.log("Computer win!");
}
if(arr[computerChoice] === "Paper" && arr[userChoice] === "Scissor"){
    arr[1] > arr[2]
    console.log("User win!");
}
if(arr[computerChoice] === "Scissor" && arr[userChoice] === "Rock"){
    arr[2] > arr[0]
    console.log("User win!");
}
if(arr[computerChoice] === "Scissor" && arr[userChoice] === "Paper"){
    arr[2] > arr[1]
    console.log("Computer win!");
}
if(arr[computerChoice] ===   arr[userChoice] ){
    arr[0] = arr[0]
    arr[1] = arr[1]
    arr[2] = arr[2]
    console.log("It's a draw!");
}




