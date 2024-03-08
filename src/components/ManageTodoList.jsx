import TodoService from '../services/TodoService';

const ManageTodoList = ({ setTodos }) => {
  const handleNewList = async () => {
    setTodos(await TodoService.getTodos(10));
  };

  const handleClearList = () => {
    setTodos([]);
  };

  return (
    <div>
      <button onClick={handleNewList}>New List</button>
      <button onClick={handleClearList}>Clear List</button>
    </div>
  );
};

export default ManageTodoList;
