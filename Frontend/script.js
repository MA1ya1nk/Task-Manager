const API = "https://task-manager-0c99.onrender.com";

const taskList = document.getElementById("taskList");
const form = document.getElementById("taskForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, description })
  });

  form.reset();
  loadTasks();
});

async function loadTasks() {
  taskList.innerHTML = "";
  const res = await fetch(API);
  const tasks = await res.json();

  tasks.forEach(task => {
    const li = document.createElement("li");

    li.innerHTML = `
      <strong>${task.title}</strong><br>
      ${task.description}<br>

      Status:
      <select onchange="updateStatus('${task._id}', this.value)">
        <option value="Pending" ${task.status === "Pending" ? "selected" : ""}>Pending</option>
        <option value="In Progress" ${task.status === "In Progress" ? "selected" : ""}>In Progress</option>
        <option value="Completed" ${task.status === "Completed" ? "selected" : ""}>Completed</option>
      </select>
      <br><br>

      <button onclick="deleteTask('${task._id}')">Delete</button>
    `;

    taskList.appendChild(li);
  });
}

async function updateStatus(id, status) {
  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status })
  });
}

async function deleteTask(id) {
  await fetch(`${API}/${id}`, { method: "DELETE" });
  loadTasks();
}

loadTasks();
