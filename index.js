
var randonvar1 = Math.floor(Math.random()*6)+1;

var randomimages = "images/dice"+randonvar1+".png";

var forimage1 = document.querySelectorAll("img")[0];

forimage1.setAttribute("src",randomimages);

var forimage2 = document.querySelectorAll("img")[1];

var randonvar2 = Math.floor(Math.random()*6)+1;

forimage2.setAttribute("src","images/dice"+randonvar2+".png");

if(randonvar1>randonvar2){
    document.querySelector("h1").innerHTML="Player 1 won❤";
}
else if(randonvar1<randonvar2){
    document.querySelector("h1").innerHTML="Player 2 won❤";
}
else{
    document.querySelector("h1").innerHTML="Match Draw❤";
}