import getTasks from './getTasks';

const addTask = (task) => {
  const tasks = getTasks();
  tasks.unshift(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default addTask;