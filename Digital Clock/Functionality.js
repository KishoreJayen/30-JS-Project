let hours = document.getElementById("hrs");
let minutes = document.getElementById("mins");
let seconds = document.getElementById("sec");

setInterval(() =>{
    let currentTime = new Date();

    hours.innerHTML = currentTime.getHours();
    minutes.innerHTML = currentTime.getMinutes();
    seconds.innerHTML = currentTime.getSeconds();

},1000);

