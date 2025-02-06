// Select the DOM elements
const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('new-btn');

// Load the saved TODO list from cookies
window.onload = () => {
    const savedTodos = getTodosFromCookies();
    savedTodos.forEach(todo => addTodoToDOM(todo));
};

// Add new TODO when the 'New' button is clicked
newBtn.addEventListener('click', () => {
    const newTodo = prompt('Enter a new TO DO:');
    if (newTodo && newTodo.trim() !== '') {
        addTodoToDOM(newTodo);
        saveTodosToCookies();
    }
});

// Add a TODO item to the DOM
function addTodoToDOM(todoText) {
    const todoItem = document.createElement('div');
    todoItem.className = 'todo-item';
    todoItem.textContent = todoText;

    // Add click event to delete TODO
    todoItem.addEventListener('click', () => {
        const confirmDelete = confirm('Do you want to remove this TO DO?');
        if (confirmDelete) {
            todoItem.remove();
            saveTodosToCookies();
        }
    });

    // Add the TODO item to the top of the list
    ftList.insertBefore(todoItem, ftList.firstChild);
}

// Save the current TODO list to cookies
function saveTodosToCookies() {
    const todos = [];
    document.querySelectorAll('.todo-item').forEach(item => {
        todos.push(item.textContent);
    });
    document.cookie = `todos=${JSON.stringify(todos)}; path=/;`;
}

// Get TODO list from cookies
function getTodosFromCookies() {
    const cookies = document.cookie.split('; ');
    const todoCookie = cookies.find(row => row.startsWith('todos='));
    return todoCookie ? JSON.parse(todoCookie.split('=')[1]) : [];
}
