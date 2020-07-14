var label = document.getElementsByClassName("label label-default");
function add(){
  let count = parseInt((label[0].innerText || label[0].textContent))
  label[0].innerHTML = count + 1;
}

function sub(){
  let count = parseInt((label[0].innerText || label[0].textContent))
  if (count > 0){
    label[0].innerHTML = count - 1;
  }
  else{
    alert("cannot go below 0");
  }
}