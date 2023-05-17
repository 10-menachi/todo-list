import addTask from './src/modules/addTask';
import showTasks from './src/modules/showTasks';

describe('Tests for Add and Delete Functionality', () => {
  beforeEach(() => {
    const listElem = document.createElement('ul');
    document.body.appendChild(listElem);
    const dummyTasks = [
      {
        id: 1,
        name: 'Hello World',
        done: false,
      },
      {
        id: 2,
        name: 'Hello World 2',
        done: false,
      },
    ];
    showTasks(listElem, dummyTasks);
    console.log(listElem);
  });
  test('should add an task to local storage and to the page as a list item', () => {
    const tasks = localStorage.getItem('tasks');
    expect(tasks).toBeNull();
    const task = 'Hello World';
    addTask(task);
    const updatedTasks = localStorage.getItem('tasks');
    expect(updatedTasks).toBe('[{"id":1,"name":"Hello World","done":false}]');
  });
  afterEach(() => {
    localStorage.clear();
  });
});
