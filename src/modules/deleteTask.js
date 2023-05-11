import getTasks from './getTasks';
// eslint-disable-next-line import/no-cycle

function deleteTask(index) {
  const tasks = getTasks();
  const newTasks = tasks.filter((task) => Number(task.id) !== Number(index));
  newTasks.forEach((task, i) => {
    task.id = i;
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}

export default deleteTask;