let userInput = document.querySelector("#date");
userInput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");
let calBtn = document.querySelector("button");



function calculateAge(){
    let birthDate = new Date(userInput.value);

    let d1 = birthDate.getDate();
    let m1 = birthDate.getMonth()+1;
    let y1 = birthDate.getFullYear();

    let today = new Date();

    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();
    

    let d3; 
    let m3;
    let y3;

    y3 = y2 - y1;

    if(m2 >= m1){
        m3 = m2 - m1;
    }
    else{
        y3--;
        m3 = (12 - m1) + m2;
    }

    
    if(d2 >= d1){
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = new Date(y1, m1, 0).getDate() + d2 -d1;
    }

    if(m3 < 0){
        m3 = 11;
        y--;
    }

    result.innerHTML = `You are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old`;
}


calBtn.addEventListener("click", ()=>{
    calculateAge();
})