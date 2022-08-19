let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")
let homeSum = 0;
let guestSum = 0;
function homeAddOne(){
   homeSum++
    homeScore.textContent = homeSum
}

function homeAddTwo(){
    homeSum+=2
    homeScore.textContent = homeSum
}

function homeAddThree(){
   homeSum+=3
    homeScore.textContent = homeSum
}


function guestAddOne(){
    guestSum++
    guestScore.textContent = guestSum
}

function  guestAddTwo(){
    guestSum+=2
    guestScore.textContent = guestSum
}

function guestAddThree(){
    guestSum+=3
    guestScore.textContent = guestSum
}

function reset(){
    homeSum = 0
    homeScore.textContent = homeSum
    guestSum = 0
    guestScore.textContent = guestSum
}