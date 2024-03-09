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
            className={
              data.done ? 'todo-list-item task-done' : 'todo-list-item'
            }
            key={data.id}
          >
            <button
              onClick={() => {
                handleTaskStatus(data.id);
              }}
            >
              {data.done ? 'X' : 'C'}
            </button>
            <span>
              {data.date.day} {data.date.month.slice(0, 3)}
            </span>
            <span>{data.task}</span>
            <button
              className="remove-item"
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
