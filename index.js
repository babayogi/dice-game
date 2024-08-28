var randomNumber1=Math.floor(6*Math.random())+1;
var randomNumber2=Math.floor(6*Math.random())+1;
console.log(randomNumber1);
console.log(randomNumber2);

    var img01= "dice"+randomNumber1+".png"
    var set1 ="images/" +img01;
    console.log(set1);

    document.querySelector(".img1 ").setAttribute("src",set1)

    var img11= "dice"+randomNumber2+".png"
    var set ="images/" +img11;
    console.log(set);

    document.querySelector(".img2 ").setAttribute("src",set)

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Wins";
}
else {
    document.querySelector("h1").innerHTML="Draw";
}