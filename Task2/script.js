document.getElementById("addBtn").addEventListener("click", addTask);

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const taskList = document.getElementById("taskList");

  // Create task elements
  const li = document.createElement("li");
  li.className = "task";

  const taskLeft = document.createElement("div");
  taskLeft.className = "task-left";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
  });

  const span = document.createElement("span");
  span.textContent = taskText;

  const removeBtn = document.createElement("button");
  removeBtn.textContent = "Remove";
  removeBtn.addEventListener("click", () => {
    taskList.removeChild(li);
  });

  // Assemble the task
  taskLeft.appendChild(checkbox);
  taskLeft.appendChild(span);
  li.appendChild(taskLeft);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  taskInput.value = "";
}
