import {
  IconSortAscending2,
  IconSortAscendingLetters,
  IconSortDescending2,
  IconSortDescendingLetters,
} from '@tabler/icons-react';
import { useState } from 'react';

const sortByState = (sort) =>
  JSON.parse(localStorage.getItem(sort)) ? false : true;

const SortTodoList = ({ todos, setTodos }) => {
  const [sortByDone, setSortByDone] = useState(sortByState('sortByDone'));
  const [sortByName, setSortByName] = useState(sortByState('sortByName'));

  const handleSortByDone = () => {
    setSortByDone(!sortByDone);
    setTodos(
      [...todos].sort((a, b) =>
        sortByDone ? a.done - b.done : b.done - a.done
      )
    );
    localStorage.setItem('sortByDone', sortByDone);
  };

  const handleSortByName = () => {
    setSortByName(!sortByName);
    setTodos(
      [...todos].sort((a, b) =>
        sortByName ? a.task.localeCompare(b.task) : b.task.localeCompare(a.task)
      )
    );
    localStorage.setItem('sortByName', sortByName);
  };

  return (
    todos.length !== 0 && (
      <li>
        <span onClick={handleSortByDone}>
          {sortByDone ? <IconSortDescending2 /> : <IconSortAscending2 />} Status
        </span>
        <span onClick={handleSortByName}>
          {sortByName ? (
            <IconSortDescendingLetters />
          ) : (
            <IconSortAscendingLetters />
          )}{' '}
          Name
        </span>
      </li>
    )
  );
};

export default SortTodoList;
