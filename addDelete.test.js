import addTask from "./src/modules/addTask";
import showTasks from "./src/modules/showTasks";
import getTasks from "./src/modules/getTasks";

describe("Tests for Add and Delete Functionality", () => {
  test("add one task", () => {
    const listElem = document.createElement("ul");
    document.body.appendChild(listElem);
    const task = "Hello World";
    addTask(task);
    const updatedTasks = getTasks();
    showTasks(listElem, updatedTasks);
    expect(listElem.children.length).toBe(localStorage.length);
  });
  test("should add an task to local storage and to the page as a list item", () => {
    const tasks = localStorage.getItem("tasks");
    expect(tasks).toBeNull();
    const task = "Hello World";
    addTask(task);
    const updatedTasks = localStorage.getItem("tasks");
    expect(updatedTasks).toBe('[{"id":1,"name":"Hello World","done":false}]');
  });
  afterEach(() => {
    localStorage.clear();
  });
});
