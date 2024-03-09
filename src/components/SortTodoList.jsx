import {
  IconCheckbox,
  IconSortAZ,
  IconSortAscendingLetters,
  IconSortAscendingSmallBig,
  IconSortDeacendingSmallBig,
  IconSortDescendingLetters,
} from '@tabler/icons-react';
import { useEffect, useState } from 'react';

const SortTodoList = ({ todos, setTodos }) => {
  const [sortByDone, setSortByDone] = useState(
    localStorage.getItem('sortByDone') || 'ascending'
  );
  const [sortByName, setSortByName] = useState(
    localStorage.getItem('sortByName') || 'none'
  );

  useEffect(() => {
    if (todos.length === 0) {
      setSortByName('none');
      setSortByDone('ascending');
    }
  }, [todos.length]);

  useEffect(() => {
    localStorage.setItem('sortByDone', sortByDone);
    localStorage.setItem('sortByName', sortByName);
  }, [sortByDone, sortByName]);

  const handleSortByDone = () => {
    setTodos(
      [...todos].sort((a, b) => {
        switch (sortByDone) {
          case 'ascending':
            setSortByDone('descending');
            return b.done - a.done;

          case 'descending':
          default:
            setSortByDone('ascending');
            return a.done - b.done;
        }
      })
    );
    setSortByName('none');
  };

  const handleSortByName = () => {
    setTodos(
      [...todos].sort((a, b) => {
        switch (sortByName) {
          case 'ascending':
            setSortByName('descending');
            return b.task.localeCompare(a.task);

          case 'descending':
          default:
            setSortByName('ascending');
            return a.task.localeCompare(b.task);
        }
      })
    );
    setSortByDone('none');
  };

  return (
    todos.length > 1 && (
      <li className="todo-sort">
        <button
          onClick={handleSortByDone}
          className="todo-sort-button"
        >
          {sortByDone === 'descending' ? (
            <IconSortDeacendingSmallBig />
          ) : (
            <IconSortAscendingSmallBig />
          )}
          Status
        </button>
        <span className="current-sort">
          {sortByDone !== 'none' ? <IconCheckbox /> : <IconSortAZ />}
        </span>
        <button
          onClick={handleSortByName}
          className="todo-sort-button"
        >
          {sortByName === 'descending' ? (
            <IconSortDescendingLetters />
          ) : (
            <IconSortAscendingLetters />
          )}
          Name
        </button>
      </li>
    )
  );
};

export default SortTodoList;
