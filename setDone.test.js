import setCompleted from './src/modules/setCompleted';

describe('setCompleted', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div data-task-id="1">
        <input type="checkbox" id="checkbox-1">
      </div>
    `;
  });

  it('should update the completion status of a task', () => {
    const task = { id: 1, name: 'Task 1', done: false };
    localStorage.setItem('tasks', JSON.stringify([task]));
    const checkbox = document.getElementById('checkbox-1');
    checkbox.checked = true;
    setCompleted(1, checkbox.checked);
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    expect(tasks[0].done).toBe(true);
  });
});
