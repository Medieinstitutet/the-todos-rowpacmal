import { IconClearAll, IconPlaylistAdd } from '@tabler/icons-react';
import TodoService from '../services/TodoService';

const ManageTodoList = ({ setTodos }) => {
  const handleNewList = async () => {
    setTodos([]);
    setTodos(await TodoService.getTodos(10));
  };

  const handleClearList = () => {
    setTodos([]);
  };

  return (
    <div>
      <button onClick={handleNewList}>
        <IconPlaylistAdd /> Create
      </button>{' '}
      <button onClick={handleClearList}>
        <IconClearAll /> Clear
      </button>
    </div>
  );
};

export default ManageTodoList;
