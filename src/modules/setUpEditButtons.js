import editTask from './editTask';

function setupEditButtons() {
  const taskElems = document.querySelectorAll('.task');
  taskElems.forEach((taskElem) => {
    taskElem.addEventListener('click', (e) => {
      if (e.target.classList.contains('list__item-text')) {
        editTask(taskElem.dataset.taskId);
      }
    });
  });
}

export default setupEditButtons;