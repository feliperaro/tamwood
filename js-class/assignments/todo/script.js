let todos = [];

const form = document.querySelector("#todo-form");
form.addEventListener("submit", (e) => e.preventDefault());

const createTodoButton = document.querySelector("#create-todo");
createTodoButton.addEventListener("click", (e) => {
  e.preventDefault();

  const todoInput = document.querySelector("#todo-input");
  if (todoInput.value.trim() === "") return alert("Please insert your TODO");

  const myTodo = {
    todo: todoInput.value,
    id: todos.length,
    isDone: false,
  };

  createNewTodo(myTodo);
  todoInput.value = "";
});

function createNewTodo(myTodo) {
  todos.push(myTodo);

  const todoDiv = document.createElement("div");
  todoDiv.id = `todo-${myTodo.id}`;
  todoDiv.className = "todo";

  let todoElement = document.createElement("span");
  todoElement.textContent = myTodo.todo;
  todoDiv.appendChild(todoElement);

  todoElement = document.createElement("input");
  todoElement.setAttribute("type", "checkbox");
  todoElement.id = `todo-${myTodo.id}-isDone`;

  todoElement.addEventListener("click", () => {
    hideTodo(myTodo);
  });
  todoDiv.appendChild(todoElement);

  const todosElement = document.querySelector(".todos");
  todosElement.appendChild(todoDiv);
}

function hideTodo(myTodo) {
  document.querySelector(`#todo-${myTodo.id}`).style.display = "none";
}
