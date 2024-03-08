import { useState } from 'react';

const SortTodoList = ({ todos, setTodos }) => {
  const [sortByDone, setSortByDone] = useState(true);
  const [sortByName, setSortByName] = useState(true);

  const handleSortByDone = () => {
    setSortByDone(!sortByDone);
    setTodos(
      [...todos].sort((a, b) =>
        sortByDone ? a.done - b.done : b.done - a.done
      )
    );
  };

  const handleSortByName = () => {
    setSortByName(!sortByName);
    setTodos(
      [...todos].sort((a, b) =>
        sortByName ? a.task.localeCompare(b.task) : b.task.localeCompare(a.task)
      )
    );
  };

  return (
    <li>
      <span onClick={handleSortByDone}>
        {sortByDone ? 'Status \u2193' : 'Status \u2191'}
      </span>
      <span onClick={handleSortByName}>
        {sortByName ? 'Task \u2193' : 'Task \u2191'}
      </span>
    </li>
  );
};

export default SortTodoList;
