var alert1;
var alert2;
var alert3;
var alert4;
var alert5;
var alert6;
var frame1;
var frame2;
var frame3;
var facetune;
var fbtiktok;
var videogame;
var facetuneclickbait;
var fbclickbait;
var gameclickbait;

document.addEventListener("DOMContentLoaded", function(){
  alert1 = document.getElementById("alert1").style.visibility = "hidden";
  alert2 = document.getElementById("alert2").style.visibility = "hidden";
  alert3 = document.getElementById("alert3").style.visibility = "hidden";
  alert4 = document.getElementById("alert4").style.visibility = "hidden";
  alert5 = document.getElementById("alert5").style.visibility = "hidden";
  alert6 = document.getElementById("alert6").style.visibility = "hidden";
  frame1 = document.getElementById("frame1").style.visibility = "hidden";
  frame2 = document.getElementById("frame2").style.visibility = "hidden";
  frame3 = document.getElementById("frame3").style.visibility = "hidden";
  facetune = document.getElementById("facetune").style.visibility = "hidden";
  fbtiktok = document.getElementById("fbtiktok").style.visibility = "hidden";
  videogame = document.getElementById("videogame").style.visibility = "hidden";
  facetuneclickbait = document.getElementById("facetuneclickbait").style.visibility = "hidden";
  fbclickbait = document.getElementById("fbclickbait").style.visibility = "hidden";
  gameclickbait = document.getElementById("gameclickbait").style.visibility = "hidden";

  setTimeout(Timer1,250);
  setTimeout(Timer2,600);
  setTimeout(Timer3,900);
  setTimeout(Timer4,1100);
  setTimeout(Timer5,1290);
  setTimeout(Timer6,1800);
  setTimeout(Timer7,2150);
  setTimeout(Timer8,2800);
  setTimeout(Timer9,3100);
});

  function Timer1(){
    document.getElementById("alert1").style.visibility = "visible";
  }
  function Timer2(){
    document.getElementById("alert2").style.visibility = "visible";
  }
  function Timer3(){
    document.getElementById("alert3").style.visibility = "visible";
  }
  function Timer4(){
    document.getElementById("alert4").style.visibility = "visible";
  }
  function Timer5(){
    document.getElementById("alert5").style.visibility = "visible";
  }
  function Timer6(){
    document.getElementById("alert6").style.visibility = "visible";
  }
  function Timer7(){
    document.getElementById("frame1").style.visibility = "visible";
    document.getElementById("fbtiktok").style.visibility = "visible";
    document.getElementById("fbclickbait").style.visibility = "visible";
  }
  function Timer8(){
    document.getElementById("frame2").style.visibility = "visible";
    document.getElementById("facetune").style.visibility = "visible";
    document.getElementById("facetuneclickbait").style.visibility = "visible";
  }
  function Timer9(){
    document.getElementById("frame3").style.visibility = "visible";
    document.getElementById("videogame").style.visibility = "visible";
    document.getElementById("gameclickbait").style.visibility = "visible";
  }
