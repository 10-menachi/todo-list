import editTask from './editTask';
import updateTaskList from './updateTasksList';

const setupEditButtons = () => {
  const listText = document.querySelectorAll('span');
  listText.forEach((text) => {
    text.addEventListener('click', (e) => {
      const id = e.target.parentElement.parentElement.dataset.taskId;
      const input = document.createElement('input');
      input.type = 'text';
      input.classList.add('edit-input');
      input.value = e.target.textContent;
      input.style.width = '100%';
      input.style.outline = 'none';
      input.style.border = 'none';
      e.target.replaceWith(input);
      input.focus();
      input.addEventListener('blur', () => {
        editTask(id, input.value);
        updateTaskList();
      });
    });
  });
};

export default setupEditButtons;