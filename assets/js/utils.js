import { tasks } from "./storage.js";

export function $(id) {
    return document.querySelector(id);
}

export function updateUI() {
    let cardListItems = '';

    for(const task of tasks) {
        const cardListItem = `
            <li class="card__list-item">
                ${task.taskText}
                <button data-id=${task.id} class="button button--danger" type="button">
                    <svg style="pointer-events: none;" height="16px" width="16px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path></svg>
                </button>
            </li>
        `;

        cardListItems = cardListItems + cardListItem;
    }
    
    const cardList = $('#card__list');
    cardList.innerHTML = cardListItems;

    $('#remaining-task').innerText = `Remaining Tasks: ${tasks.length}` ;

    $('#card__input').value = '';
  
}