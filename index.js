function addTask() {
    var taskInput = document.getElementById('task');
    var taskText = taskInput.value.trim();
    
    if (taskText !== '') {
        var taskList = document.getElementById('taskList');
        var li = document.createElement('li');
        li.innerHTML = `<span>${taskText}</span><button class="delete" onclick="deleteTask(this)">Delete</button>`;
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

function deleteTask(element) {
    element.parentElement.remove();
}
