var randomnumber1=Math.floor(Math.random()*6+1);
var diceimage1="images/dice"+randomnumber1+".png";
document.querySelector("img.img1").setAttribute("src",diceimage1);
var randomnumber2=Math.floor(Math.random()*6+1);
var diceimage2="images/dice"+randomnumber2+".png";
document.querySelector("img.img2").setAttribute("src",diceimage2);
if (randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🎉Player 1 wins"
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="🎉Player 2 wins"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}

