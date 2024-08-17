document.addEventListener('DOMContentLoaded', () => {
    const addTaskForm = document.getElementById('addTaskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    // Add a new task
    addTaskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTask(taskText);
            taskInput.value = '';
        }
    });

    // Add task function
    function addTask(taskText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText}</span>
            <div>
                <button class="complete">Complete</button>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
            </div>
        `;
        taskList.appendChild(li);

        const completeButton = li.querySelector('.complete');
        const editButton = li.querySelector('.edit');
        const deleteButton = li.querySelector('.delete');

        // Mark task as complete
        completeButton.addEventListener('click', () => {
            li.classList.toggle('completed');
        });

        // Edit task
        editButton.addEventListener('click', () => {
            const newTaskText = prompt('Edit the task:', taskText);
            if (newTaskText !== null && newTaskText.trim() !== '') {
                li.querySelector('span').textContent = newTaskText.trim();
            }
        });

        // Delete task
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(li);
        });
    }
});
