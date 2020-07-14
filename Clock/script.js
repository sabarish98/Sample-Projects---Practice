const hour = document.getElementById('hour');
const min = document.getElementById('min');
const sec = document.getElementById('sec');
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
function displaydate(){
    const date = new Date()
    hour.innerText = checkTime(date.getHours());
    min.innerText = checkTime(date.getMinutes());
    sec.innerText = checkTime(date.getSeconds());
    setTimeout(function(){
        displaydate()
    },500);
}

displaydate();