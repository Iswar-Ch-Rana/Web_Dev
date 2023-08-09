// $("h1").css("color" ,"green") ;


// Adding a class to the css
$("h1").addClass("big");

$("button") ; 


// menupulating the Text in JQuery

// $("h1").text("Bye");




/****  Attribute in js ****** */

console.log($("img").attr("src"));


/*********** event listner in Jquery **************/ 


$("h1").click(function(){
    $("h1").css("color" , "purple");
})


$("button").click(function(){
    $("h1").css("color" , "purple");
})
