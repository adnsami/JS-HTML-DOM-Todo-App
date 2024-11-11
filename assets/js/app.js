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

$('#button-add').addEventListener('click', addTask);