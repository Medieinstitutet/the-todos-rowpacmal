const ShowHistory = ({ history }) => {
  return (
    <ul className="todo-list">
      {history.map((record, index) => (
        <li key={index}>
          {record.task} ({record.date.time})
        </li>
      ))}
    </ul>
  );
};

export default ShowHistory;
