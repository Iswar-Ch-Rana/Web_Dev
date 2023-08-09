alert("hello");
document.querySelector("h1").innerHTML = "Good Bye";

document.querySelector("li a") ;
document.getElementById("btn");
document.getElementsByTagName("h1")
document.getElementsByClassName


document.querySelector("li").style.color = "red" ;

// use for add the new class to a class for different style
document.querySelector("h1").classList.toggle("huge") ;

// Text Manipulation using js
document.getElementById("style").textContent = "helllll";

// HTML attribute manipulation

document.querySelector("a").setAttribute("href","https://www.bing.com") ;


/************* Higher Order Functions *********** */

function add(num1, num2) {
    return num1 + num2;
}   
 
function subtract(num1, num2) {
    return num1 - num2;
}
 
function multiply(num1, num2) {
    return num1 * num2;
}
 
function divide(num1, num2) {
    return num1 / num2;
}
 
function calculator(num1, num2, operator) {
    return operator(num1, num2);
}



/**************** Object in Js ****************/

var houseKeeper1 = {
    years: 12 ,
    name: "jimmy",
    cleans: ["bathroom" ,"Lobby"]  
}

/************** Using new keyword ************* */

function BellBoy(name,age,hobbby,languages){
    this.name = name ;
    this.age = age ;
    this.hobbby = hobbby ;
    this.languages = languages ;
    this.openDoor = function(){
        alert("Opening door");
    }
}

var bellBoy1 = new BellBoy("bitu",20,coding,["C++" , "Python"]);

