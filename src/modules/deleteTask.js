function deleteTask(index) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const newTasks = tasks.filter((task) => task.id !== index);
  newTasks.forEach((task, i) => {
    task.id = i;
  });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
}

export default deleteTask;