import getTasks from './getTasks';

const setCompleted = (taskId, checked) => {
  const tasks = getTasks();
  const index = tasks.findIndex((task) => task.id === taskId);
  tasks[index].done = checked;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default setCompleted;