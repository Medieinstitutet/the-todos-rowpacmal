import { IconClearAll, IconPlaylistAdd } from '@tabler/icons-react';
import TodoService from '../services/TodoService';

const ManageTodoList = ({ setTodos }) => {
  const handleNewList = async () => {
    const newList = await TodoService.getTodos(10);
    setTodos([]);
    setTodos(newList.sort((a, b) => a.done - b.done));
  };

  const handleClearList = () => {
    setTodos([]);
  };

  return (
    <div className="list-manager">
      <button
        onClick={handleNewList}
        className="create-list-button"
      >
        <IconPlaylistAdd size={'1.5rem'} /> Create
      </button>
      <button
        onClick={handleClearList}
        className="clear-list-button"
      >
        <IconClearAll size={'1.5rem'} /> Clear
      </button>
    </div>
  );
};

export default ManageTodoList;
