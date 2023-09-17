const taskInput = document.getElementById("task");
const pendingTasksList = document.getElementById("pending-tasks");
const completedTasksList = document.getElementById("completed-tasks");

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === "") return;

    const taskItem = document.createElement("li");
    taskItem.innerHTML = `
        <span>${taskText}</span>
        <div>
            <button onclick="completeTask(this)">Complete</button>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>
        </div>
    `;

    pendingTasksList.appendChild(taskItem);
    taskInput.value = "";
}

function completeTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.classList.add("completed");
    button.parentNode.remove();

    completedTasksList.appendChild(taskItem);
}

function editTask(button) {
    const taskItem = button.parentElement.parentElement;
    const taskText = taskItem.querySelector("span").innerText;
    const updatedText = prompt("Edit task:", taskText);

    if (updatedText !== null && updatedText.trim() !== "") {
        taskItem.querySelector("span").innerText = updatedText;
    }
}

function deleteTask(button) {
    const taskItem = button.parentElement.parentElement;
    taskItem.remove();
}
