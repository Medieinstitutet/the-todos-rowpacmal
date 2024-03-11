import { IconCalendar, IconClock, IconNote } from '@tabler/icons-react';

const ShowHistory = ({ history }) => {
  return (
    <ul className="history-list">
      {history.map((record, index) => (
        <li
          key={index}
          className="history-list-item"
        >
          <div className="history-list-note">
            <IconCalendar />
            {record.date.full}
          </div>
          <p className="history-list-note">
            <IconNote /> {record.task}
          </p>
          <div className="history-list-note">
            <IconClock /> {record.date.time}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ShowHistory;
