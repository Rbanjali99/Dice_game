var randomnumber = Math.floor(Math.random()*6)+1;

var randomdice = "dice" + randomnumber +".png"; //dice1.png

var randomimage = "images/" + randomdice ; //images/dice1.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimage);
//-----------------------------------------------
var randomnumber2 = Math.floor(Math.random()*6) + 1;

var randomimage2 = "images/dice" + randomnumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomimage2);

if (randomnumber > randomnumber2){
    document.querySelector("h1").innerHTML = "🚩 Player1 wins";
}
else if (randomnumber < randomnumber2){
    document.querySelector("h1").innerHTML = "Player2 wins 🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw 👌👌";
}