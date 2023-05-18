const refreshList = () => localStorage.setItem('tasks', JSON.stringify([]));
export default refreshList;