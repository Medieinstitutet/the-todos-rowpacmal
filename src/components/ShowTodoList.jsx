const ShowTodoList = ({ listData, handleTaskStatus, handleRemoveTask }) => {
  return (
    <ul className="todo-list">
      {listData.map((data) => (
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
            &#9932;
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ShowTodoList;
