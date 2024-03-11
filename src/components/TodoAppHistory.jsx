import { useState } from 'react';
import { IconClearAll, IconSearch } from '@tabler/icons-react';
import ShowHistory from './ShowHistory';
import ScrollToTop from './ScrollToTop';

const TodoAppHistory = ({ todos, setTodos, history, setHistory }) => {
  const [searchInput, setSearchInput] = useState('');

  const handleClearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="todo-app-wrapper">
      <section className="todo-app">
        <header className="todo-app-header">
          <h2>History</h2>
        </header>
        <form
          onSubmit={() => {}}
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
        <ShowHistory history={history} />
        {history.length > 5 && <ScrollToTop />}
      </section>
    </div>
  );
};

export default TodoAppHistory;
