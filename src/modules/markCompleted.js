const markCompleted = (task) => {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks[task.id].done = !tasks[task.id].done;
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

export default markCompleted;