import getTasks from './getTasks';
// eslint-disable-next-line import/no-cycle
import showTasks from './showTasks';

function deleteTask(index) {
  const tasks = getTasks();
  const newTasks = tasks.filter((task) => Number(task.id) !== Number(index));
  newTasks.forEach((task, i) => {
    task.id = i;
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  showTasks();
}

export default deleteTask;