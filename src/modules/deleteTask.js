import getTasks from './getTasks';

const deleteTask = (id) => {
  let tasks = getTasks();
  tasks = tasks.filter((task) => Number(task.id) !== Number(id));
  // update task IDs to avoid duplicates
  tasks = tasks.map((task, index) => {
    task.id = index;
    return task;
  });
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default deleteTask;