import addTask from './src/modules/addTask';
import editTask from './src/modules/editTask';
import getTasks from './src/modules/getTasks';
import showTasks from './src/modules/showTasks';

describe('editing tasks', () => {
  beforeEach(() => {
    const task1 = 'Task 1';
    const task2 = 'Task 2';
    addTask(task1);
    addTask(task2);
  });
  test('Edit a task', () => {
    const listElem = document.createElement('ul');
    document.body.appendChild(listElem);
    const tasks = localStorage.getItem('tasks');
    showTasks(listElem, JSON.parse(tasks));
    let listItem = document.querySelector('li[data-task-id="1"]');
    let taskText = listItem.querySelector('.list__item-text');
    expect(taskText.innerHTML).toBe('Task 1');
    editTask(1, 'Task 1 edited');
    const newTasks = getTasks();
    showTasks(listElem, newTasks);
    listItem = document.querySelector('li[data-task-id="1"]');
    taskText = listItem.querySelector('.list__item-text');
    expect(taskText.innerHTML).toBe('Task 1 edited');
  });

  afterEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
  });
});
