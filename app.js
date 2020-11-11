// define variables
const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task");
const taskList = document.querySelector('.collection');
// event listeners
// add task to list - submit button
form.addEventListener('submit', addTask);

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

