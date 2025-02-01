// === Todo CRUD Management ===

// Array to store todos
let todos = [];

//DOM Elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Functions  to render todos
function renderTodos() {
    todoList.innerHTML = ''; //Clear the List
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${todo}</span>
            <button onclick="editTodo(${index})">Edit</button>
            <button onclick="deleteTodo(${index})">Delete</button>
        `;
        todoList.appendChild(li);
    });
}

// Function to add a new todo
function addTodo(event){
    event.preventDefault(); //Prevent form submission
    const newTodo = todoInput.ariaValueMax.trim();
    if (newTodo){
        todos.push(newTodo);
        todoInput.value = ''; // Clear the input 
        renderTodos(); 
    }
}

// Function to  edit todo
function editTodo(index){
    const updatedTodo = prompt('Edit your todo'. todos[index]);
    if (updatedTodo !== null){
        todos.[index] = updatedTodo.trim();
        renderTodos(); 
    }
}


