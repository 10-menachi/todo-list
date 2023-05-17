import getTasks from "./src/modules/getTasks";
import addTask from "./src/modules/addTask";
import editTask from "./src/modules/editTask";
import showTasks from "./src/modules/showTasks";

beforeEach(() => {
  const task1 = "Task 1";
  const task2 = "Task 2";
  addTask(task1);
  addTask(task2);
});

describe("editing tasks", () => {
  test("edit one task", () => {
    const listElem = document.createElement("ul");
    document.body.appendChild(listElem);
    const updatedTasks = getTasks();

    editTask(1, "Task 3");

    showTasks(listElem, updatedTasks);
    const taskOne = document.querySelector("ul li:nth-child(1) div input");
    console.log(taskOne);
    expect(taskOne.innerHTML).toBe("Task 3");
  });
});
