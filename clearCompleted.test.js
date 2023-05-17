import getTasks from "./src/modules/getTasks";
import clearCompleted from "./src/modules/setCompleted";

beforeEach(() => {
  const dummyTask = [
    {
      id: 1,
      name: "Task 1",
      done: false,
    },
    {
      id: 2,
      name: "Task 2",
      done: true,
    },
    {
      id: 3,
      name: "Task 3",
      done: true,
    },
    {
      id: 4,
      name: "Task 4",
      done: false,
    },
  ];
  localStorage.setItem("tasks", JSON.stringify(dummyTask));
});

describe("editing tasks", () => {
  test("clear items completed", () => {
    clearCompleted();
    const updatedTasks = getTasks();
    expect(updatedTasks.length).toBe(2);
    expect(updatedTasks[0].done).toBeFalsy();
  });
});
