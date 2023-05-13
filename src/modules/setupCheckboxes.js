import getTasks from './getTasks';

const setUpCheckBoxes = () => {
  const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
  checkBoxes.forEach((checkBox) => {
    checkBox.addEventListener('change', (e) => {
      const tasks = getTasks();
      const targetTaskId = Number(e.target.parentElement.parentElement.dataset.taskId);
      const index = tasks.findIndex((task) => task.id === targetTaskId);
      tasks[index].done = e.target.checked;
      localStorage.setItem('tasks', JSON.stringify(tasks));
    });
  });
};

export default setUpCheckBoxes;