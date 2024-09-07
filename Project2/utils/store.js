const store = {
    todos : [
        {
            id: "1",
            title: "Complete Task A",
            completed: false
        },
        {
            id: "2",
            title: "Read Book",
            completed: true
        },
    ],
};

const handler = {
    get(target, property){
      return target[property];  
    },
    set(target, property, value){
        target[property] = value;
        if(property === "todos"){
            window.dispatchEvent(new Event("todosChange"));
        }
        localStorage.setItem("store", JSON.stringify(store));
        return true;
    },
};

const storeProxy = new Proxy(store, handler);

function addTodo(newTodo){
    storeProxy.todos = [...storeProxy.todos, newTodo];
}

function deleteTodo(id){
    storeProxy.todos = storeProxy.todos.filter((todo)=>{
        if(todo.id !== id){
            return todo;
        }
    })
}

function togleCompleted(id, completed){
    storeProxy.todos = storeProxy.todos.map((todo)=>{
        if(todo.id === id){
            return {...todo, completed: completed};
        }
        else {
            return todo;
        }
    })
}

export {addTodo, deleteTodo, togleCompleted};
export default store;