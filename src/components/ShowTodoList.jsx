import SortTodoList from './SortTodoList';

const ShowTodoList = ({ todos, setTodos }) => {
  const noTodosMessage =
    'There is no tasks in your list, please add new tasks...';

  const handleTaskStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, done: todo.done ? false : true };
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
            className="list-item"
            key={data.id}
          >
            <input
              type="checkbox"
              checked={data.done && true}
              onChange={() => {
                handleTaskStatus(data.id);
              }}
            />
            <span className={data.done ? 'task-done' : null}>{data.task}</span>
            <button
              className="remove-item"
              onClick={() => {
                handleRemoveTask(data.id);
              }}
            >
              &#10006;
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
