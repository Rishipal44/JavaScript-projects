const body = document.body;
const button = document.querySelector("button");
const intervalId = setInterval(()=>{
    const red = Math.floor(Math.random()*126);
    const green = Math.floor(Math.random()*126);
    const blue = Math.floor(Math.random()*126);
    const bgColor = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = bgColor;
}, 2000);

button.addEventListener("click", ()=>{
    clearInterval(intervalId);
    button.textContent = body.style.backgroundColor;
});

