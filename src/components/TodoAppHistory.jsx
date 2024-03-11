import { useEffect, useState } from 'react';
import { IconClearAll, IconSearch } from '@tabler/icons-react';
import ShowHistory from './ShowHistory';
import ScrollToTop from './ScrollToTop';

const TodoAppHistory = ({ todos, setTodos, history, setHistory }) => {
  const [searchInput, setSearchInput] = useState('');
  const [searchHistory, setSearchHistory] = useState([]);

  useEffect(() => {
    const handleSearch = () => {
      setSearchHistory(
        history.filter((search) =>
          search.task.toLowerCase().includes(searchInput.toLowerCase())
        )
      );
    };
    handleSearch();
  }, [history, searchInput]);

  const handleClearHistory = () => {
    setSearchHistory([]);
    setHistory([]);
  };

  return (
    <div className="todo-app-wrapper">
      <section className="todo-app">
        <header className="todo-app-header">
          <h2>History</h2>
        </header>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="todo-list-form"
        >
          <label className="add-new-item">
            <input
              type="text"
              placeholder="Search task history..."
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
              className="test"
            />
            <div>
              <button>
                <IconSearch />
              </button>
            </div>
          </label>
        </form>
        <div className="list-manager">
          <button
            onClick={handleClearHistory}
            className="clear-list-button"
          >
            <IconClearAll size={'1.5rem'} /> Clear All
          </button>
        </div>
        {searchInput.length > 0 ? (
          searchHistory.length > 0 ? (
            <ShowHistory history={searchHistory} />
          ) : (
            <ul className="history-list">
              <li className="empty-todo-list">No search results found.</li>
            </ul>
          )
        ) : history.length > 0 ? (
          <ShowHistory history={history} />
        ) : (
          <ul className="history-list">
            <li className="empty-todo-list">No task history found.</li>
          </ul>
        )}
        {history.length > 5 && searchHistory.length > 5 && <ScrollToTop />}
      </section>
    </div>
  );
};

export default TodoAppHistory;
