const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btsn");
const color = document.querySelector('.color');
btn.addEventListener("click",()=>{
    // console.log(document.body)
    let hexColor = "#";
    for(i = 0; i< 6;i++){
        hexColor += hex[Math.floor(Math.random()*hex.length)];
    }
    color.innerText = hexColor;
    document.body.style.backgroundColor = hexColor;
})