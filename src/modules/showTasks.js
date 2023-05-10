import getTasks from './getTasks';

const showTasks = (tasksDiv) => {
  const tasks = getTasks();
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
    tasksDiv.innerHTML = listItemElem + tasksDiv.innerHTML;
  });
};

export default showTasks;