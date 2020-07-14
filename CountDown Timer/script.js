const timer = document.getElementById('timer');
const button = document.getElementById('start');
const button_stop = document.getElementById('stop');
const display_timer = document.getElementById('display');
var elem = document.getElementById("myBar");
var sound = document.getElementById("audio");
function checkTime(i) {
  if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
  return i;
}

function playSound() {
  sound.play();
}


button.addEventListener('click', function () { //start button listener
  if (timer.value === "") {
    alert("Set the time first,you ignorant slut !!!");
  }
  else {
    const date_input = new Date(timer.value).getTime();
    let currentdate = new Date().getTime();
    const totalTime = date_input - currentdate;
    const runner = setInterval(function () {
      let date = new Date().getTime();
      var distance = date_input - date;
      var width = ((totalTime - distance) / (totalTime))*100;
      var id = setInterval(frame, 500);
      function frame() {
        if (width === 100 || width >100) {
          clearInterval(id);
        } else {
          elem.style.width = width + '%';
        }
      }
    var days = checkTime(Math.floor(distance / (1000 * 60 * 60 * 24)));
    var hours = checkTime(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    var minutes = checkTime(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    var seconds = checkTime(Math.floor((distance % (1000 * 60)) / 1000));
    display_timer.innerHTML = days + ':' + hours + ':' + minutes + ':' + seconds;
    if (distance < 0 || distance === 0) {
      clearInterval(runner);
      clearInterval(id);
      playSound();
      alert("Time's up Biatch!!");
      display_timer.innerHTML = "Do you want to run countdown again??";
    }
    button_stop.addEventListener('click', myfunc);   //stop button listener
    function myfunc() {
      if (runner) {
        clearInterval(runner);
        clearInterval(id);
        elem.style.width = 0 +'%';
        display_timer.innerHTML = "Timer Reset. Do you want to run it again?";
        playSound();
      }
    }
  }, 500);
  }
  
})
