var numberOfDrum = document.querySelectorAll(".drum").length ;

for (let i = 0; i < numberOfDrum ; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click",handeleCLick);
}


// Click Event listener


function handeleCLick(){
    var keys = this.innerHTML ;
    playAudio(keys);
    buttonAnimation(keys) ;
}

// KeyBoard Event Listner

document.addEventListener("keypress" , switchPress);


function switchPress(event){
    playAudio(event.key);
    buttonAnimation(event.key);
}

// Function for playing audio 
function playAudio(key){
    switch (key) {
        case "w":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
    }
}

function buttonAnimation(currkey){
    var activebtn = document.querySelector("." + currkey);
    activebtn.classList.add("pressed");
    
    setTimeout(function(){
        activebtn.classList.remove("pressed");
    },100)
}




