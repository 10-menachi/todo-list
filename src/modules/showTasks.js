// eslint-disable-next-line import/no-cycle
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
    tasksDiv.insertAdjacentHTML('afterbegin', listItemElem);
    const text = document.querySelector('.list__item-text');
    if (task.done) {
      text.style.textDecoration = 'line-through';
      text.style.opacity = '0.5';
    }
  });
  tasksDiv.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete')) {
      const id = e.target.parentElement.dataset.taskId;
      deleteTask(id);
    }
  });
  const checkboxes = document.querySelectorAll('.list__item-checkbox');
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', (e) => {
      const id = e.target.parentElement.parentElement.dataset.taskId;
      const tasks = getTasks();
      tasks.forEach((task) => {
        if (Number(task.id) === Number(id)) {
          task.done = !task.done;
        }
      });
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
};

export default showTasks;