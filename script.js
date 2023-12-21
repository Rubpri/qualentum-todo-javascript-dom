const input = document.querySelector("input");
const addTaskButton = document.querySelector(".btn");
const ul = document.querySelector("ul");

const tasksArray = [];
const tasksInfo = [];
let id = 0;

addTaskButton.addEventListener("click", () => {

    const task = input.value;

    if (task != "") {

        tasksArray.push(task)
        
        tasksInfo.push(
            {
                "id": id,
                "nombre": task,
                "completada": false
            }
        )  

        id += 1;
        
        const li = document.createElement("li");
        const article = document.createElement("article");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "task-checkbox";
        const span = document.createElement("span");
        span.textContent = task;
        span.className = "task-text";

        ul.appendChild(li);
        ul.className = "task-list";
        li.appendChild(article);
        article.appendChild(checkbox);
        article.appendChild(span);

        
       
        function deleteTask() {
            const trash = document.createElement("i");
            trash.className = "fa fa-trash";

            trash.addEventListener("click", (e) => {
                const task = e.target.parentElement;
                ul.removeChild(task)
            })

            return trash;
        }

        li.appendChild(deleteTask());

        input.value = "";

        
        console.log(tasksInfo)
        console.log(tasksArray)
       
    }  
})
