const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Učitavanje postojećih zadataka
window.onload = () => {
  const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  savedTasks.forEach(task => addTask(task));
};

function addTask(taskText = null) {
  const task = taskText || taskInput.value.trim();
  if (!task) return;

  const li = document.createElement('li');
  li.innerHTML = `
    ${task}
    <button onclick="removeTask(this)">X</button>
  `;
  taskList.appendChild(li);
  taskInput.value = '';

  saveTasks();
}

function removeTask(btn) {
  btn.parentElement.remove();
  saveTasks();
}

function saveTasks() {
  const tasks = Array.from(taskList.children).map(li => li.textContent.replace('X', '').trim());
  localStorage.setItem('tasks', JSON.stringify(tasks));
}
