const input = document.querySelector("input");
const addTaskButton = document.querySelector(".btn");
const ul = document.querySelector("ul");

const taskListArray = [];
let id = 1;


addTaskButton.addEventListener("click", () => {
    
    const task = input.value;
    if (task != "") {

        taskListArray.push(
            {
                taskId: id,
                taskName: task,
                active: false
            }
        )
        id += 1
        renderTaskList();
        input.value = "";
    }
})

function deleteTask(taskId) {
    const taskIndex = taskListArray.findIndex(task => task.taskId === taskId);
    if (taskIndex !== -1) {
        taskListArray.splice(taskIndex, 1);
        renderTaskList();
    }
}


function toggleTaskActive(taskId) {
    const taskIndex = taskListArray.findIndex(task => task.taskId === taskId);
    if (taskIndex !== -1) {
        taskListArray[taskIndex].active = !taskListArray[taskIndex].active;
        renderTaskList();
    }
}

function renderTaskList() {

    ul.innerHTML = "";
    console.log(taskListArray)

    for (let index = 0;  index < taskListArray.length; index++) {
        
        const li = document.createElement("li");
        const article = document.createElement("article");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        checkbox.checked = taskListArray[index].active;

        checkbox.addEventListener("change", () => {
            toggleTaskActive(taskListArray[index].taskId);
        });


        const span = document.createElement("span");
        span.textContent = taskListArray[index].taskName;
        span.className = "task-text";

        ul.appendChild(li);
        ul.className = "task-list";
        li.appendChild(article);
        article.appendChild(checkbox);
        article.appendChild(span);
        
        function createDeleteButton(taskId) {
            const trash = document.createElement("i");
            trash.className = "fa fa-trash";

            trash.addEventListener("click", () => {
                deleteTask(taskId);
            });

            return trash;
        }

        li.appendChild(createDeleteButton(taskListArray[index].taskId));
    }

}
