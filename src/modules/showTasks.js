// eslint-disable-next-line import/no-cycle
import getTasks from './getTasks';

const showTasks = (tasksDiv) => {
  const tasks = getTasks();
  tasks.forEach((task) => {
    const listItemElem = `
    <li class="list-item${task.done ? ' list__item_done' : ''}" data-task-id="${task.id}">
        <div>
            <input type="checkbox" class="list__item-checkbox"${task.done ? ' checked' : ''}>
            <span class="list__item-text list-text">${task.name}</span>
        </div>
        <box-icon name='trash-alt' type='solid' class='delete icon' data-task-id="${task.id}" ></box-icon>
    </li>
  `;
    tasksDiv.insertAdjacentHTML('afterbegin', listItemElem);
    const text = document.querySelector('.list__item-text');
    if (task.done) {
      text.style.textDecoration = 'line-through';
      text.style.opacity = '0.5';
    }
  });
};

export default showTasks;