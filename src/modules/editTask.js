import getTasks from './getTasks';
import updateTaskList from './updateTaskList';

function editTask(id, newText) {
  const tasks = getTasks();
  const index = tasks.findIndex((task) => task.id === Number(id));
  tasks[index].text = newText;
  localStorage.setItem('tasks', JSON.stringify(tasks));
  updateTaskList();
}

export default editTask;