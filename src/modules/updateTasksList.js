import setUp from './setUp';
import showTasks from './showTasks';

const updateTaskList = (listElem) => {
  listElem.innerHTML = '';
  showTasks(listElem);
  setUp();
};

export default updateTaskList;