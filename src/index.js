import Task from './modules/Task';
import addTask from './modules/addTask';
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
  listElem.innerHTML = '';
  showTasks(listElem);
});