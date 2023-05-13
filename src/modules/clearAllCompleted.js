import getTasks from './getTasks';

const clearAllCompleted = () => {
  const tasks = getTasks();
  let newTasks = tasks.filter((task) => !task.done);
  newTasks = newTasks.map((task, index) => {
    task.id = index;
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
};

export default clearAllCompleted;