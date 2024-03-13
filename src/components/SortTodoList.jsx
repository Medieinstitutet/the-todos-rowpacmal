import {
  IconCheckbox,
  IconSortAZ,
  IconSortAscendingLetters,
  IconSortAscendingSmallBig,
  IconSortDeacendingSmallBig,
  IconSortDescendingLetters,
} from '@tabler/icons-react';

const SortTodoList = ({ todos, sortByDone, sortByName, handleSortBy }) => {
  const handleSortByDone = () => {
    handleSortBy('done');
  };

  const handleSortByName = () => {
    handleSortBy('name');
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
