import { useEffect, useState } from 'react';
import { IconClearAll, IconSearch } from '@tabler/icons-react';
import ShowHistory from './ShowHistory';
import ScrollToTop from './ScrollToTop';

const TodoAppHistory = ({ history, setHistory, SortBy, sortByName }) => {
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

  const handleShowHistory = () => {
    const emptyList = (text) => (
      <ul className="history-list">
        <li className="empty-todo-list">{text}</li>
      </ul>
    );

    if (searchInput.length > 0) {
      if (searchHistory.length > 0)
        return (
          <ShowHistory
            history={searchHistory}
            SortBy={SortBy}
            isSearching={true}
            sortByName={sortByName}
          />
        );

      return emptyList('No search results found.');
    } else {
      if (history.length > 0)
        return (
          <ShowHistory
            history={history}
            SortBy={SortBy}
          />
        );

      return emptyList('No task history found.');
    }
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

        {handleShowHistory()}
        {history.length > 5 && searchHistory.length > 5 && <ScrollToTop />}
      </section>
    </div>
  );
};

export default TodoAppHistory;
