import deleteTask from './deleteTask';
import getTasks from './getTasks';

const showTasks = (tasksDiv) => {
  const tasks = getTasks();
  tasks.forEach((task) => {
    const listItemElem = `
    <li class="list-item${task.done ? ' list__item_done' : ''}" data-task-id="${task.id}">
        <div>
            <input type="checkbox" class="list__item-checkbox"${task.done ? ' checked' : ''}>
            <span class="list__item-text">${task.name}</span>
        </div>
        <i class="fa-solid fa-trash delete"></i>
    </li>
  `;
    tasksDiv.innerHTML = listItemElem + tasksDiv.innerHTML;
  });
  tasksDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      const id = e.target.parentElement.dataset.taskId;
      deleteTask(id);
      tasksDiv.innerHTML = '';
      showTasks(tasksDiv);
    }
  });
};

export default showTasks;
