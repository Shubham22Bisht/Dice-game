var randomNumber1=Math.floor(Math.random()*6);
var randomDiceImage1="images/dice" +randomNumber1+".png";
var img1=document.querySelectorAll("img")[0];
img1.setAttribute("src",randomDiceImage1);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2="images/dice" +randomNumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomDiceImage2);

var result=document.querySelector("h1");
if(randomDiceImage1>randomDiceImage2)
{
    result.innerText="🚩Player 1 wins!";
}else if(randomDiceImage1<randomDiceImage2)
{
    result.innerText="Player 2 wins!🚩";
}else {
    result.innerText="Draw!";
}