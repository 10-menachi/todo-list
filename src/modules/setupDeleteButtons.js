import deleteTask from './deleteTask';
// eslint-disable-next-line import/no-cycle
import updateTaskList from './updateTaskList';

function setupDeleteButtons(listElem) {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.dataset.taskId;
      deleteTask(id);
      updateTaskList(listElem);
    });
  });
}

export default setupDeleteButtons;