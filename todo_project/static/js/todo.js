document.addEventListener("DOMContentLoaded", () => {
    const addBtn = document.getElementById("addBtn");
    const todoInput = document.getElementById("todoInput");
    const todoDate = document.getElementById("todoDate");
    const todoList = document.getElementById("todoList");
    const emptyMessage = document.getElementById("emptyMessage");

    // Function to show/hide empty state
    function toggleEmptyMessage() {
        if (todoList.children.length === 0) {
            emptyMessage.style.display = "block";
        } else {
            emptyMessage.style.display = "none";
        }
    }

    addBtn.addEventListener("click", () => {
        const taskText = todoInput.value.trim();
        const taskDate = todoDate.value;

        if (taskText === "") return;

        const li = document.createElement("li");
        li.classList.add("todo-item");

        // Checkbox + text
        const left = document.createElement("div");
        left.style.display = "flex";
        left.style.alignItems = "center";
        left.style.gap = "8px";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", () => {
            li.classList.toggle("completed", checkbox.checked);
        });

        const span = document.createElement("span");
        span.textContent = taskDate ? `${taskText} (Due: ${taskDate})` : taskText;

        left.appendChild(checkbox);
        left.appendChild(span);

        // Delete button
        const delBtn = document.createElement("button");
        delBtn.textContent = "✖";
        delBtn.classList.add("delete-btn");
        delBtn.addEventListener("click", () => {
            todoList.removeChild(li);
            toggleEmptyMessage();
        });

        li.appendChild(left);
        li.appendChild(delBtn);

        todoList.appendChild(li);

        // Clear inputs
        todoInput.value = "";
        todoDate.value = "";

        toggleEmptyMessage();
    });

    // Initialize message on page load
    toggleEmptyMessage();
});
