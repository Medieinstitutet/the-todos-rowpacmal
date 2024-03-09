import { IconSquare, IconSquareCheck, IconSquareX } from '@tabler/icons-react';
import SortTodoList from './SortTodoList';

const ShowTodoList = ({ todos, setTodos }) => {
  const handleTaskStatus = (id) => {
    const sortByDone = localStorage.getItem('sortByDone');
    const updateStatus = todos.map((todo) => {
      if (todo.id === id) todo.done = todo.done ? false : true;
      return todo;
    });

    if (sortByDone !== 'none')
      setTodos(
        updateStatus.sort((a, b) => {
          switch (sortByDone) {
            case 'descending':
              return b.done - a.done;

            case 'ascending':
            default:
              return a.done - b.done;
          }
        })
      );

    setTodos(updateStatus);
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
            <div>
              <button
                onClick={() => {
                  handleTaskStatus(data.id);
                }}
                className="todo-checkbox"
              >
                {data.done ? <IconSquareCheck /> : <IconSquare />}
              </button>
            </div>
            <p>{data.task}</p>
            <div>
              <button
                className="remove-item-button"
                onClick={() => {
                  handleRemoveTask(data.id);
                }}
              >
                <IconSquareX />
              </button>
            </div>
          </li>
        ))
      ) : (
        <li className="empty-todo-list">Tasks all done! Ready for more?</li>
      )}
    </ul>
  );
};

export default ShowTodoList;
