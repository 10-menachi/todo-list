import getTasks from './getTasks';
import Task from './Task';

const addTask = (index) => {
  const t = getTasks();
  const task = new Task(t.length, index, false);
  const tasks = getTasks();
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default addTask;