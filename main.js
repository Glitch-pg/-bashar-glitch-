function lit(){
    document.getElementById("derk").style.display = "block";
    document.getElementById("lit").style.display="none";
    document.querySelector("header").style.background = "#000016";
    document.querySelector("#services").style.background = "#000016";
    document.querySelector("#contact").style.background = "#000016";
    
}
function derk() {
  document.getElementById("derk").style.display = "none";
  document.getElementById("lit").style.display = "block";
  document.querySelector("header").style.background = "#e9e9e9";
  document.querySelector("#services").style.background = "white";
  document.querySelector("#contact").style.background = "white";
}