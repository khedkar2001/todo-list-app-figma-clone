document.addEventListener("DOMContentLoaded", loadTasks);

const addTaskBtn = document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", addTask);

function getTasks() {
  return JSON.parse(localStorage.getItem("tasks")) || [];
}

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function addTask() {
  const name = document.getElementById("taskName").value.trim();
  const date = document.getElementById("taskDate").value;
  const priority = document.getElementById("taskPriority").value;

  if (!name || !date || !priority) {
    alert("Please fill in all fields.");
    return;
  }

  const tasks = getTasks();
  tasks.push({ name, date, priority, completed: false });
  saveTasks(tasks);

  document.getElementById("taskName").value = "";
  document.getElementById("taskDate").value = "";
  document.getElementById("taskPriority").value = "";

  loadTasks();
}

function deleteTask(index) {
  const tasks = getTasks();
  tasks.splice(index, 1);
  saveTasks(tasks);
  loadTasks();
}

function toggleComplete(index) {
  const tasks = getTasks();
  tasks[index].completed = !tasks[index].completed;
  saveTasks(tasks);
  loadTasks();
}

function loadTasks() {
  const todayTasksEl = document.getElementById("todayTasks");
  const futureTasksEl = document.getElementById("futureTasks");
  const completedTasksEl = document.getElementById("completedTasks");

  todayTasksEl.innerHTML = "";
  futureTasksEl.innerHTML = "";
  completedTasksEl.innerHTML = "";

  const tasks = getTasks();
  const today = new Date().toISOString().split("T")[0];

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    const info = document.createElement("div");
    info.classList.add("task-info");

    info.innerHTML = `
      <span>${index + 1}. ${task.name}</span>
      <span>${task.date} &nbsp;&nbsp; Priority: ${task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</span>
    `;

    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    if (!task.completed) {
      const completeBtn = document.createElement("button");
      completeBtn.innerHTML = "⟳";
      completeBtn.classList.add("complete-btn");
      completeBtn.onclick = () => toggleComplete(index);
      actions.appendChild(completeBtn);
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.innerHTML = "🗑";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.onclick = () => deleteTask(index);
    actions.appendChild(deleteBtn);

    li.appendChild(info);
    li.appendChild(actions);

    if (task.completed) {
      completedTasksEl.appendChild(li);
    } else if (task.date === today) {
      todayTasksEl.appendChild(li);
    } else {
      futureTasksEl.appendChild(li);
    }
  });
}