import {
  IconCheckbox,
  IconSortAZ,
  IconSortAscendingLetters,
  IconSortAscendingSmallBig,
  IconSortDeacendingSmallBig,
  IconSortDescendingLetters,
} from '@tabler/icons-react';
import SortBy from '../utils/SortBy';

const SortTodoList = ({
  todos,
  setTodos,
  sortByDone,
  setSortByDone,
  sortByName,
  setSortByName,
}) => {
  const handleSortByDone = () => {
    setTodos(SortBy.done(todos, sortByDone, setSortByDone));
    setSortByName('none');
  };

  const handleSortByName = () => {
    setTodos(SortBy.name(todos, sortByName, setSortByName));
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
