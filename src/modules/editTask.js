import getTasks from './getTasks';

const editTask = (id, newText) => {
  const tasks = getTasks();
  const index = tasks.findIndex((task) => task.id === Number(id));

  if (index !== -1) {
    tasks[index].name = newText;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
};

export default editTask;