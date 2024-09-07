const input = document.querySelector(".input");
const buttons = document.querySelectorAll("button");

let inputValue = "";

buttons.forEach((button)=>{
    button.addEventListener("click", (e)=>{
        let className = e.target.classList;
        
        try {
            if(e.target.textContent === "C"){
                inputValue = "";
                input.value = inputValue;
            }
            else if(className.contains("delete")){
                inputValue = inputValue.slice(0, [inputValue.length-1]);
                input.value = inputValue;
            }
            else if(className.contains("equal")) {
                inputValue = eval(inputValue);
                input.value = inputValue;
                inputValue = e.target.textContent.slice(1);
            } 
            else {
                inputValue += e.target.textContent;
                input.value = inputValue;
                console.log(input.value);
            }
        } catch(error) {
            console.log("An error occured");
        }
    })

})