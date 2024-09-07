const openModalButton = document.querySelector(".openModalButton");
const modal = document.querySelector(".modal");
const closeModalBtn = document.querySelector(".close-modal");


function openModal(){
    modal.classList.remove("close");
    document.body.classList.add("overflowHidden");
}

const closeModal = ()=>{
    modal.classList.add("close");
    document.body.classList.remove("overflowHidden");
}

openModalButton.addEventListener("click", ()=>{
    openModal();
});

// closeModalBtn.addEventListener("click", ()=>{
//     closeModal();
// })

modal.addEventListener("click", (e)=>{
    const target = e.target;
    if(target.classList.contains("close-modal") || target.classList.contains("overlay")){
        closeModal();
    }
})