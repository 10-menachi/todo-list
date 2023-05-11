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
  const task = new Task(t.length, input.value, false);
  addTask(task);
  form.reset();
  updateTaskList(); // update task list and set up event listeners again
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
      const tasks = getTasks();
      const targetTaskId = Number(e.target.parentElement.parentElement.dataset.taskId);
      const index = tasks.findIndex((task) => task.id === targetTaskId);
      tasks[index].done = e.target.checked;
      localStorage.setItem('tasks', JSON.stringify(tasks));
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
  showTasks(listElem);
  setupDeleteButtons();
  setupEditButtons();
  setUpCheckBoxes();
};

setupDeleteButtons();
setupEditButtons();
setUpCheckBoxes();

const completed = document.querySelector('.clear');
completed.addEventListener('click', () => {
  const tasks = getTasks();
  let newTasks = tasks.filter((task) => !task.done);
  newTasks = newTasks.map((task, index) => {
    task.id = index;
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  updateTaskList();
});