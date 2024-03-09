import { IconTrash } from '@tabler/icons-react';
import SortTodoList from './SortTodoList';

const ShowTodoList = ({ todos, setTodos }) => {
  const noTodosMessage =
    'There is no tasks in your list, please add new tasks...';

  const handleTaskStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) todo.done = todo.done ? false : true;
        return todo;
      })
    );
  };

  const handleRemoveTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ul className="todo-list">
      <SortTodoList
        todos={todos}
        setTodos={setTodos}
      />
      {todos.length > 0 ? (
        todos.map((data) => (
          <li
            className={'todo-list-item' + (data.done ? ' task-done' : '')}
            key={data.id}
          >
            <input
              type="checkbox"
              checked={data.done && true}
              onChange={() => {
                handleTaskStatus(data.id);
              }}
              className="todo-checkbox"
            />
            <span>
              {data.date.day} {data.date.month.slice(0, 3)}
            </span>
            <span>{data.task}</span>
            <button
              className="remove-item-button"
              onClick={() => {
                handleRemoveTask(data.id);
              }}
            >
              <IconTrash />
            </button>
          </li>
        ))
      ) : (
        <li>{noTodosMessage}</li>
      )}
    </ul>
  );
};

export default ShowTodoList;
