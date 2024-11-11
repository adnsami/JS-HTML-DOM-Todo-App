import { tasks } from "./storage.js";
import { $, updateUI } from "./utils.js";



function addTask() {
    const taskText = $('#card__input').value;
    const task = {
        id: tasks.length + 1,
        taskText
    }

    tasks.push(task);

    console.log(tasks);
    updateUI();
}

function removeTask(event) {
   if(event.target.tagName !== 'BUTTON') return;
    const id = Number(event.target.getAttribute('data-id'));
    
    for (const idx in tasks) {
        if (tasks[idx].id === id) {
            tasks.splice(idx, 1);
            break;
        }
    }
    console.log(tasks);
    updateUI();
}

$('#button-add').addEventListener('click', addTask);
$('#card__list').addEventListener('click', removeTask);

