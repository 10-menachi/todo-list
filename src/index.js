/* eslint-disable no-use-before-define */
import Task from './modules/Task';
import addTask from './modules/addTask';
import clearAllCompleted from './modules/clearAllCompleted';
import getTasks from './modules/getTasks';
import setUp from './modules/setUp';
import showTasks from './modules/showTasks';
import updateTaskList from './modules/updateTasksList';
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
  updateTaskList(listElem);
});

setUp();
updateTaskList(listElem);

const completed = document.querySelector('.clear');
completed.addEventListener('click', () => {
  clearAllCompleted();
  updateTaskList(listElem);
});