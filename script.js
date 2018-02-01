var secondHand = document.querySelector(".second-hand"),
    minuteHand = document.querySelector(".min-hand"),
    hourHand = document.querySelector(".hour-hand");

function setDate() {
    var now = new Date();
    console.log(now);
    // get seconds
    var seconds = now.getSeconds();
    var secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //get minutes
    var minutes = now.getMinutes();
    var minutesDegrees = (minutes / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
    //get hours
    var hours = now.getHours();
    var hoursDegrees = (hours / 12) * 360 + 120;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
    
}

setInterval(setDate, 1000);


