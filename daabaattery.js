
// window.alert("This website is not complete and may have some bugs.");// how to refreash website??

//why does it happen evry time i refresh? learn hw 2 make it only ekh time
document.getElementsByClassName("js_buttons").innerHtml = ""; // change and put 
//console.log("test to see if running");
//var x = mouseX;
//-------------------------------------------------
var shawn = "shawny";
var YEET = shawn + "boi";
document.getElementById("js_textAdjust").innerHTML = YEET;
//------------------------------------------------

document.querySelector("#xout").addEventListener("click", function(){
  document.getElementById("xout").style.display = "none";
  document.getElementById("adlike").style.display = "none";
  document.getElementById("showcat").style.display = "block";
});
document.querySelector("#showcat").addEventListener("mouseover", function() {
  document.getElementById("adlike").style.opacity = "0.5";
  document.getElementById("adlike").style.display = "block";
});
document.querySelector("#showcat").addEventListener("mouseout", function() {
  document.getElementById("adlike").style.display = "none";
});
document.querySelector("#showcat").addEventListener("click", function() {
  document.getElementById("xout").style.display = "block";
  document.getElementById("adlike").style.display = "block";
  document.getElementById("showcat").style.display = "none";
});
//setTimeout

function jusType() {
  let titlename = document.getElementById("");
};
var keke = "jeff";
// dont semi colon on if statement conditions
//document.getElementsById("WWaterLava").style.backgroundImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6vZ7cs-Ad85zHr6hJZDhmLx9shWs6nxy00A&usqp=CAU";