let todos = [
    { id: 1, title: "putzen", isDone: false },
    { id: 2, title: "kochen", isDone: true },
    { id: 3, title: "lernen", isDone: false },
    { id: 4, title: "einkaufen", isDone: false }
];

let input = document.getElementById("input");
let todosContainer = document.getElementById("todos");
let addButton = document.getElementById("add");

function renderTodos() {
    let html = "";
    todos.forEach(function (element) {
        html += '<div class="todo-item">';
        html += '<span>' + element.title + ' - ' + (element.isDone ? 'completed' : 'not completed') + '</span>';

        if (element.isDone) {
            html += '<button data-id="' + element.id + '" class="remove-btn">Delete</button>';
        } else {
            html += '<button data-id="' + element.id + '" class="complete-btn">Complete</button>';
        }

        html += '</div>';
    });
    todosContainer.innerHTML = html;
}

function addTodo() {
    let title = input.value.trim();
    if (title === "") {
        return;
    }

    todos.push({
        id: todos.length + 1,
        title: title,
        isDone: false
    });

    input.value = "";
    renderTodos();
}

function removeTodo(id) {
    let newTodos = [];
    todos.forEach(function (todo) {
        if (todo.id !== id) {
            newTodos.push(todo);
        }
    });
    todos = newTodos;
    renderTodos();
}

function completeTodo(id) {
    todos.forEach(function (todo) {
        if (todo.id === id) {
            todo.isDone = true;
        }
    });
    renderTodos();
}

addButton.addEventListener("click", addTodo);

todosContainer.addEventListener("click", function (event) {
    let target = event.target;
    if (target.classList.contains("remove-btn")) {
        let id = Number(target.dataset.id);
        removeTodo(id);
    }

    if (target.classList.contains("complete-btn")) {
        let id = Number(target.dataset.id);
        completeTodo(id);
    }
});

renderTodos();