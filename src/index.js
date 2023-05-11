/* eslint-disable no-use-before-define */
import Task from './modules/Task';
import addTask from './modules/addTask';
import deleteTask from './modules/deleteTask';
import getTasks from './modules/getTasks';
import showTasks from './modules/showTasks';
import './styles/main.css';

const listElem = document.querySelector('.list');
const form = document.querySelector('.add-task');
showTasks(listElem);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const t = getTasks();
  const input = document.querySelector('.task-input');
  const task = new Task(t.length + 1, input.value, false);
  addTask(task);
  form.reset();
  updateTaskList(); // update task list and set up event listeners again
});

function setupDeleteButtons() {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.dataset.taskId;
      deleteTask(id, listElem);
      updateTaskList();
    });
  });
}

function setupEditButtons() {
  const taskElems = document.querySelectorAll('.task');
  taskElems.forEach((taskElem) => {
    taskElem.addEventListener('click', (e) => {
      if (e.target.classList.contains('list__item-text')) {
        const inputElem = document.createElement('input');
        inputElem.style.width = '100%';
        inputElem.style.outline = 'none';
        inputElem.style.border = 'none';
        inputElem.type = 'text';
        inputElem.value = e.target.innerText;
        taskElem.innerHTML = '';
        taskElem.appendChild(inputElem);
        inputElem.focus();
        const handleKeyPress = (e) => {
          if (e.key === 'Enter') {
            editTask(taskElem.dataset.taskId, inputElem.value);
            window.removeEventListener('keypress', handleKeyPress);
          }
        };
        window.addEventListener('keypress', handleKeyPress);
      }
    });
  });
}

const setUpCheckBoxes = () => {
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('change', (e) => {
      const tasks = getTasks();
      const targetTaskId = Number(e.target.parentElement.parentElement.dataset.taskId);
      const index = tasks.findIndex((task) => task.id === targetTaskId);
      tasks[index].done = e.target.checked;
      localStorage.setItem('tasks', JSON.stringify(tasks));
      updateTaskList();
    });
  });
};

function editTask(id, newText) {
  const tasks = getTasks();
  const index = tasks.findIndex((task) => task.id === Number(id));

  if (index !== -1) {
    tasks[index].name = newText;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  updateTaskList();
}

function updateTaskList() {
  listElem.innerHTML = '';
  showTasks(listElem);
  setupDeleteButtons();
  setupEditButtons();
  setUpCheckBoxes();
}

setupDeleteButtons();
setupEditButtons();
setUpCheckBoxes();
