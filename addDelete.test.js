import addTask from './src/modules/addTask';
import deleteTask from './src/modules/deleteTask';
import getTasks from './src/modules/getTasks';
import showTasks from './src/modules/showTasks';

describe('Tests for Add and Delete Functionality', () => {
  const listElem = document.createElement('ul');
  document.body.appendChild(listElem);
  test('add one task', () => {
    const task = 'Hello World';
    addTask(task);
    const updatedTasks = getTasks();
    showTasks(listElem, updatedTasks);
    expect(listElem.children.length).toBe(localStorage.length);
  });
  test('should add an task to local storage and to the page as a list item', () => {
    const tasks = localStorage.getItem('tasks');
    expect(tasks).toBeNull();
    const task = 'Hello World';
    addTask(task);
    const updatedTasks = localStorage.getItem('tasks');
    expect(updatedTasks).toBe('[{"id":1,"name":"Hello World","done":false}]');
  });
  test('should delete a task from local storage and from the page as a list item', () => {
    const tasks = localStorage.getItem('tasks');
    expect(tasks).toBeNull();
    const task = 'Hello World';
    addTask(task);
    const updatedTasks = localStorage.getItem('tasks');
    expect(updatedTasks).toBe('[{"id":1,"name":"Hello World","done":false}]');
    deleteTask(1, listElem);
    const updatedTasks2 = localStorage.getItem('tasks');
    expect(updatedTasks2).toBe('[]');
  });

  afterEach(() => {
    document.body.innerHTML = '';
    localStorage.clear();
  });
});
