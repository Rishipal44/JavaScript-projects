
import render from "./render.js";
import store from "./store.js";
import { addTodo, deleteTodo, togleCompleted} from "./store.js";


window.addEventListener("todosChange", ()=>{
    render();
});

const storeFromLocalStorage = JSON.parse(localStorage.getItem("store"));
if(storeFromLocalStorage?.todos.length > 0){
    store.todos = storeFromLocalStorage.todos;
}else {
    localStorage.setItem("store", JSON.stringify(store));
    render();
}


const form = document.querySelector("#form");
const todoTitleInput = document.querySelector(".todo-title-input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const todoTitle = todoTitleInput.value;
    const newTodo = {
        id: crypto.randomUUID(),
        title: todoTitle,
        completed: false
    };
    addTodo(newTodo);
    todoTitleInput.value = "";
});



const todos = document.querySelector(".todos");

todos.addEventListener("click", (e)=>{
    const target = e.target;
    if(target.classList.contains("delete-todo-btn")){
        const id = target.closest(".todo").dataset.id;
        deleteTodo(id);
    }
});


todos.addEventListener("change", (e)=>{
    const target = e.target;
    if(target.classList.contains("todo-checkbox")){
        const id = target.closest(".todo").dataset.id;
        const completed = target.checked;
        togleCompleted(id, completed);
    }
})