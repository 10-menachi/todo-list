import Task from './modules/Task';
import addTask from './modules/addTask';
import deleteTask from './modules/deleteTask';
import getTasks from './modules/getTasks';
import showTasks from './modules/showTasks';
import './styles/main.css';

const listElem = document.querySelector('.list');
const form = document.querySelector('.add-task');

const buttons = showTasks(listElem);
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

buttons[0].forEach((checkbox) => {
  checkbox.addEventListener('change', (e) => {
    const id = e.target.parentElement.parentElement.dataset.taskId;
    const tasks = getTasks();
    const task = tasks.find((t) => t.id === +id);
    task.done = e.target.checked;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    listElem.innerHTML = '';
    showTasks(listElem);
  });
});

buttons[1].forEach((button) => {
  button.addEventListener('click', (e) => {
    const id = e.target.parentElement.dataset.taskId;
    deleteTask(id);
    listElem.innerHTML = '';
    showTasks(listElem);
  });
});