import {
  IconClearAll,
  IconPlaylistAdd,
  IconProgressCheck,
  IconProgressX,
} from '@tabler/icons-react';
import TodoService from '../services/TodoService';
import ProgressBar from './ProgressBar';
import { useState } from 'react';

const ManageTodoList = ({ todos, setTodos, history, setHistory }) => {
  const [showProgress, setShowProgress] = useState(false);

  const handleShowProgress = () => {
    setShowProgress(!showProgress);
  };

  const handleNewList = async () => {
    const newList = await TodoService.getTodos(10);
    const reversedList = [...newList].reverse();
    setTodos([]);
    setTodos(newList.sort((a, b) => a.done - b.done));
    setHistory([...reversedList, ...history].slice(0, 15));
  };

  const handleClearList = () => {
    setTodos([]);
  };

  return (
    <>
      <div className="list-manager">
        {todos.length > 0 && (
          <button
            onClick={handleShowProgress}
            className="show-progress-button"
          >
            {showProgress ? (
              <IconProgressX size={'1.5rem'} />
            ) : (
              <IconProgressCheck size={'1.5rem'} />
            )}
          </button>
        )}
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
      {showProgress && <>{todos.length > 0 && <ProgressBar todos={todos} />}</>}
    </>
  );
};

export default ManageTodoList;
