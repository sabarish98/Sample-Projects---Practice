const images = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png"];
const image = document.getElementById('image');
const left = document.getElementById('b1');
const right = document.getElementById("b2");
let count = 0;
right.addEventListener("click",()=>{
    if (count < images.length-1)
    {
    count += 1;
    image.src = images[count];
    }
    right.style.display = "hidden";
})
left.addEventListener("click",()=>{
    if(count > 0)
    count -=1;
    image.src = images[count];
})

