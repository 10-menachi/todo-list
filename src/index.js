import './styles/main.css';

// const tasks = [
//   { id: 1, name: 'Learn React', done: false },
//   { id: 2, name: 'Learn JS', done: true },
//   { id: 3, name: 'Learn TS', done: false },
//   { id: 4, name: 'Learn Node', done: false },
//   { id: 5, name: 'Learn Express', done: true },
// ];

const tasks = [];

const listElem = document.querySelector('.list');
tasks.forEach((task) => {
  const listItemElem = `
    <li class="list-item${task.done ? ' list__item_done' : ''}">
        <div>
            <input type="checkbox" class="list__item-checkbox"${task.done ? ' checked' : ''}>
            <span class="list__item-text">${task.name}</span>
        </div>
        <i class="fa-solid fa-ellipsis-vertical"></i>
    </li>
  `;
  listElem.innerHTML = listItemElem + listElem.innerHTML;
});