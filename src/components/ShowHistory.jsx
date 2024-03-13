import { IconCalendar, IconClock, IconNote } from '@tabler/icons-react';
import SortBy from '../utils/SortBy';

const ShowHistory = ({ history, isSearching = false, sortByName = null }) => {
  let sortedHistory = history;

  isSearching
    ? (sortedHistory = SortBy.name.noSwitch(history, sortByName))
    : (sortedHistory = SortBy.epoch(history));

  return (
    <ul className="history-list">
      {sortedHistory.map((record, index) => (
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
