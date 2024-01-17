var randomNumber1 = Math.random()
var randomNumber1 = randomNumber1*6;
randomNumber1 = Math.floor(randomNumber1)+1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource= "images/"+randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);

var randomNumber2 =Math.floor(Math.random()*6)+1;
var randomImageSource2= "images/"+"dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);
if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="Draw!"
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="&#128681 Play 1 Wins!"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins! &#128681"
}
