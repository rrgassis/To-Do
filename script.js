// Selectors
const form = document.querySelector("form");
const taskList = document.getElementById("task-list");
let tasks

// Event listeners
form.addEventListener("submit", addTask);
taskList.addEventListener("click", deleteTask);
// taskList.addEventListener("click", handleTaskLiClick);

// Functions
function addTask(event) {
  event.preventDefault();
  const newTaskInput = document.getElementById("new-task");
  const newTaskText = newTaskInput.value.trim();
  if (newTaskText === "") {
    return;
  }
  const newTask = createTask(newTaskText);
  taskList.appendChild(newTask);
  tasks = document.querySelectorAll('.task')
  tasks.forEach((task) => {
    task.addEventListener('click', handleTaskLiClick)
  })
  newTaskInput.value = "";
}

function createTask(text) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = text;
  span.classList.add();
  const button = document.createElement("button");
  button.textContent = "Delete";
  button.classList.add("delete-btn");
  li.setAttribute("class","initial")
  li.classList.add('task')
  li.appendChild(span);
  li.appendChild(button);
  return li;
}

function deleteTask(event) {
  if (event.target.classList.contains("delete-btn")) {
    const li = event.target.closest("li");
    li.remove();
  }
}


function handleTaskLiClick(){
  this.classList.toggle('checked')
}