var logform = document.getElementById("logform")
var regform = document.getElementById("regform")
var Indicator = document.getElementById("indicator")
function register(){
    regform.style.transform= "translateX(0px)";
    logform.style.transform= "translateX(0px)";
    Indicator.style.transform= "translateX(98px)";

}
function login(){
    regform.style.transform= "translateX(400px)";
    logform.style.transform= "translateX(400px)";
    Indicator.style.transform= "translateX(-100px)";
}
