/* eslint-disable no-use-before-define */
import addTask from './modules/addTask';
import clearCompleted from './modules/clearCompleted';
import deleteTask from './modules/deleteTask';
import getTasks from './modules/getTasks';
import refreshList from './modules/refreshList';
import setCompleted from './modules/setCompleted';
import showTasks from './modules/showTasks';
import './styles/main.css';

const listElem = document.querySelector('.list');
const form = document.querySelector('.add-task');
const tasks = getTasks();
showTasks(listElem, tasks);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('.task-input');
  addTask(input.value);
  updateTaskList();
  form.reset();
});

const setupDeleteButtons = () => {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.dataset.taskId;
      deleteTask(id, listElem);
      updateTaskList();
    });
  });
};

const setupEditButtons = () => {
  const listText = document.querySelectorAll('span');
  listText.forEach((text) => {
    text.addEventListener('click', (e) => {
      const id = e.target.parentElement.parentElement.dataset.taskId;
      const input = document.createElement('input');
      input.type = 'text';
      input.classList.add('edit-input');
      input.value = e.target.textContent;
      input.style.width = '100%';
      input.style.outline = 'none';
      input.style.border = 'none';
      e.target.replaceWith(input);
      input.focus();
      input.addEventListener('blur', () => {
        editTask(id, input.value);
      });
    });
  });
};

const setUpCheckBoxes = () => {
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('change', (e) => {
      const taskId = Number(e.target.parentElement.parentElement.dataset.taskId);
      const { checked } = e.target;
      setCompleted(taskId, checked);
      updateTaskList();
    });
  });
};

const editTask = (id, newText) => {
  const tasks = getTasks();
  const index = tasks.findIndex((task) => task.id === Number(id));

  if (index !== -1) {
    tasks[index].name = newText;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  updateTaskList();
};

const updateTaskList = () => {
  listElem.innerHTML = '';
  const tasks = getTasks();
  showTasks(listElem, tasks);
  setupDeleteButtons();
  setupEditButtons();
  setUpCheckBoxes();
};

setupDeleteButtons();
setupEditButtons();
setUpCheckBoxes();

const completed = document.querySelector('.clear');
completed.addEventListener('click', () => {
  clearCompleted();
  updateTaskList();
});

const refresh = document.querySelector('.refresh');
refresh.addEventListener('click', () => {
  refreshList();
  updateTaskList();
});