// get tasks from local storage

const getTasks = () => {
  const storedTasks = localStorage.getItem('tasks');
  if (storedTasks) {
    return JSON.parse(storedTasks);
  }
  return [];
};

export default getTasks;
