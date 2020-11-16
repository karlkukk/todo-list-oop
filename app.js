// define variables
const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task");
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('#clear-tasks');
// event listeners
// add task to list - submit button
form.addEventListener('submit', addTask);
// remove task from list - fas backspace icon
taskList.addEventListener('click', removeTask);
// clear tasks from list
clearBtn.addEventListener('click', clearTasks);

// addTask function
function addTask(e) {
    if (taskInput.value === '') {
        alert("Add new task!")
    } else {
        //create li
        const li = document.createElement('li');
        li.className = 'collection-item';
        // add input value
        li.appendChild(document.createTextNode(taskInput.value));
        // link for element removing
        const link = document.createElement('a');
        // add css to link
        link.className = 'secondary-content';
        // add fas icon
        link.innerHTML = '<i class="fas fa-backspace"></i>';
        // add link into li
        li.appendChild(link);
        // add link into ul
        taskList.appendChild(li);
        // clear task input
        taskInput.value = "";
        e.preventDefault();
    }
}

// removeTask function
function removeTask(e) {
    if (e.target.parentElement.classList.contains('secondary-content')) {
        if (confirm("Do you want to remove this task?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// clearTasks function

function clearTasks(e) {
    if (confirm("Do you want to clear all tasks?")) {
        taskList.innerHTML = "";
    }
}
