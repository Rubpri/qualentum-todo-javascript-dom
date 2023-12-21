const input = document.querySelector("input");
const addTaskButton = document.querySelector(".btn");
const ul = document.querySelector("ul");

addTaskButton.addEventListener("click", (e) => {
    
    const task = input.value;

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
    li.appendChild(deleteTask());

    function deleteTask() {
        const trash = document.createElement("i");
        trash.className = "fa fa-trash";

        trash.addEventListener("click", (e) => {
            const task = e.target.parentElement;
            ul.removeChild(task)
        })

        return trash;
    }

    input.value = "";
    
})

