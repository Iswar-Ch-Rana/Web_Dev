/************** Length Of String      LEC 109         ****************/


var para = prompt("Write Your Tweet: ");
var total = 280;
var len = para.length;
alert("Your Have written " + len + " Charaters You Have -" + (total - len) + " Left .");

/************** Slicing A string      LEC 110         ****************/


var Name = "Bitu";
Name.slice(0, 3);

var para = prompt("Write Your Tweet: ");
var tweetUnder15 = para.slice(0, 15);
var len = tweetUnder15.length;
alert("Tweet tweet Under 15 len = " + len + "  = " + tweetUnder15);


/**************  Case Changing     LEC 111         ****************/
// Change Name to upper case Or Lower Case
var Name = "Bitu";
Name.toUpperCase();
Name = Name.toLowerCase();


/**************  First Latter Change to Upper case     LEC 112         ****************/

var Name = prompt("Enter Your Name? ");
// Create ver to store name 
var fChar = Name.slice(0, 1);
// Capitalzie 1st letter
var upperFirst = fChar.toUpperCase();
// slice Remaining Char 
var end = Name.length;
var smallRemain = Name.slice(1, end);
smallRemain = smallRemain.toLowerCase();

// Merge an alert
var CapitalzieName = upperFirst + smallRemain;
alert("Your Name is = " + CapitalzieName);


/**************  First Latter Change to Upper case     LEC 113         ****************/

// Operator in JavaScript

/**************  Incremanet and decrement     LEC 114         ****************/

var x = 6;
x++;
x--;

/**************  Functions Parameter  LEC 119         ****************/

// To Round Of a Number We can Use Math.Floor() function

function getMilk(price) {
    var bottle = 20;
    console.log("You can Get Total " + Math.floor(price / bottle) + " Of Milk");
}

getMilk(119);


/**************  Functions Returns LEC 121         ****************/


function getMilk(price) {
    var bottle = 20;
    console.log("You can Get Total " + Math.floor(price / bottle) + " Of Milk");
    return price % bottle;
}

var change = getMilk(119);
console.log("The money left is = " + change);


/**************  Random Number And Love Calculator LEC 125         ****************/


var num = Math.random();
num = num * 6;
num = Math.floor(num) + 1;
console.log(num);

// LOVE SCORE

var YourName = prompt("Enter Your Name!");
var PartnerName = prompt("Enter Your Partner Name!");

var num = Math.random();
num = num * 100;
num = Math.floor(num) + 1;

alert("The Love Between " + YourName + " And " + PartnerName + " is " + num + "% ❤️!");

/**************    Conditional statement If else statement LEC 126         ****************/


var YourName = prompt("Enter Your Name!");
var PartnerName = prompt("Enter Your Partner Name!");

var num = Math.random();
num = num * 100;
num = Math.floor(num) + 1;

// IF ELSE Statement

if (num > 70) {
    alert("Your Love Is " + num + "% ❤️ And It is So strong , It is Unbreakable Like Diamond");
}
else {
    alert("The Love Score Is " + num + "% ❤️!");
}


/**************    Coparision operator in JS LEC 127         ****************/

// === is Equal to or not
// !== is Not Equal to or not
// > I Greater Then Or Not
// < I Less Then Or Not
// >= I Greater Then Equal to Or Not
// <= I Less Then Equal to Or Not

// && And
// || OR
//  ! Not


/**************    Combining operator in JS LEC 128         ****************/

function bmiCalculator(weight, height) {
    height = Math.pow(height, 2);
    var bmi = (weight / height);
    if (bmi < 18.5) {
        interpretation = "Your BMI is " + bmi + ", so you are underweight.";
    }
    if (bmi > 18.5 && bmi < 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you have a normal weight.";
    }
    if (bmi > 24.9) {
        interpretation = "Your BMI is " + bmi + ", so you are overweight.";
    }
    return interpretation;
}
var ch = bmiCalculator(58, 1.8);
alert(ch);



/**************    Arrays in JS LEC 131         ****************/




//  guestList.includes(guestName);   This Will Return a value true or false

var guestList = ["Bitu", "Rakhi", "sapan", "purnima"];
// console.log (guestList.length);
// console.log(guestList[2]);
var guestName = prompt("What is Your Name ?");
if (guestList.includes(guestName)) {
    alert("Welcome");
} else {
    alert("Sorry,may be Next time");
}





/**************    Fizz Buzz in in JS LEC 132         ****************/





var arr = [];
var count = 1;

function FizzBuzz() {

    if (count % 3 == 0 && count % 5 == 0) {
        arr.push("FizzBuzz");
    } else if (count % 5 == 0) {
        arr.push("Buzz");
    } else if (count % 3 == 0) {
        arr.push("Fizz");
    } else {
        arr.push(count);
    }

    count++;
    console.log(arr);
}




/**************    Random person in an array in JS LEC 133         ****************/




var arr = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

var names;

function whoIsPaying(arr) {
    var rand = Math.floor(Math.random() * arr.length);
    return arr[rand] + " Is Going to buy Lunch Today!";
}

names = whoIsPaying(arr);

console.log(names);



/****************************************************  New Season   ************************************************************** */
/**************    While Loop in JS LEC 109         ****************/




var arr = [];
var count = 1;

function fizzbuzz() {
    while (count <= 100) {
        if (count % 3 === 0 && count % 5 === 0) {
            arr.push("FizzBuzz");
        }
        else if (count % 3 === 0) {
            arr.push("Fizz");
        }
        else if (count % 5 === 0) {
            arr.push("Buzz");
        }
        else {
            arr.push(count);
        }
        count++;
    }
    console.log(arr);
}

fizzbuzz();



/**************    99 bottle game  JS LEC 110         ****************/



var numberOfBottles = 99
while (numberOfBottles >= 0) {

    var bottleWord = "bottle";
    if (numberOfBottles === 1) {
        bottleWord = "bottles";
    }

    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall");
    console.log(numberOfBottles + " " + bottleWord + " of beer,");

    console.log("Take one down, pass it around,");

    numberOfBottles--;
    
    console.log(numberOfBottles + " " + bottleWord + " of beer on the wall.");
}

/**************    For Loop in JS LEC 110         ****************/


var arr = [];


function fizzbuzz() {
    for( let count = 1 ; count <= 100 ; count++ ){
        if(count % 3 === 0 && count % 5 === 0 ){
            arr.push("FizzBuzz") ;
        }
        else if(count % 3 === 0){
            arr.push("Fizz");
        }
        else if(count % 5 === 0){
            arr.push("Buzz");
        }
        else{
            arr.push(count) ;
        }
        // count++ ;
    }
    console.log(arr);
}

fizzbuzz();

 
