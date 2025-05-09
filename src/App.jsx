import './styles/App.css';
import { useState, useEffect } from 'react';
import AppHeader from './components/AppHeader';
import TodoApp from './components/TodoApp';
import TodoAppHistory from './components/TodoAppHistory';
import AppFooter from './components/AppFooter';
import SortBy from './utils/SortBy';

function App() {
  const [toggleTab, setToggleTab] = useState(true);

  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem('history')) || []
  );

  const [sortByDone, setSortByDone] = useState(
    localStorage.getItem('sortByDone') || 'ascending'
  );

  const [sortByName, setSortByName] = useState(
    localStorage.getItem('sortByName') || 'none'
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

  useEffect(() => {
    if (todos.length === 0) {
      setSortByName('none');
      setSortByDone('ascending');
    }
  }, [todos.length]);

  useEffect(() => {
    localStorage.setItem('sortByDone', sortByDone);
    localStorage.setItem('sortByName', sortByName);
  }, [sortByDone, sortByName]);

  return (
    <main className="app">
      <AppHeader
        toggleTab={toggleTab}
        setToggleTab={setToggleTab}
      />

      {toggleTab ? (
        <TodoApp
          todos={todos}
          setTodos={setTodos}
          history={history}
          setHistory={setHistory}
          SortBy={SortBy}
          sortByDone={sortByDone}
          setSortByDone={setSortByDone}
          sortByName={sortByName}
          setSortByName={setSortByName}
        />
      ) : (
        <TodoAppHistory
          history={history}
          setHistory={setHistory}
          SortBy={SortBy}
          sortByName={sortByName}
        />
      )}
      <AppFooter />
    </main>
  );
}

export default App;
