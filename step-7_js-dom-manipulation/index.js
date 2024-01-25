document.addEventListener("DOMContentLoaded", () => {
  const rootDiv = document.querySelector("#root");
  const todoMainUL = document.querySelector("#todo-main");
  const addTodoButton = document.querySelector("#add-todo");
  const todoInput = document.querySelector("#todo-input");

  function createTodoItem(todo) {
    return `<li style="background: red;">${todo}</li>`;
  }

  function handleAddTodo() {
    const currentTodos = todoMainUL.innerHTML;
    const todoItem = todoInput.value;
    todoMainUL.innerHTML = currentTodos + createTodoItem(todoItem);
    todoInput.value = "";
  }

  addTodoButton.addEventListener("click", handleAddTodo);
});
