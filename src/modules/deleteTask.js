import getTasks from './getTasks';

const deleteTask = (id) => {
  let tasks = getTasks();
  tasks = tasks.filter((task) => Number(task.id) !== Number(id));
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default deleteTask;