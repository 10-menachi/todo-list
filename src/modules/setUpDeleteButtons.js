import deleteTask from './deleteTask';

const setupDeleteButtons = (listElem) => {
  const deleteButtons = document.querySelectorAll('.delete');
  deleteButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
      const id = e.target.dataset.taskId;
      deleteTask(id, listElem);
    });
  });
};

export default setupDeleteButtons;