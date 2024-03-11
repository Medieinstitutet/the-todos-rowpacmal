import './styles/App.css';
import { useState, useEffect } from 'react';
import AppHeader from './components/AppHeader';
import TodoApp from './components/TodoApp';
import TodoAppHistory from './components/TodoAppHistory';

function App() {
  const [toggleTab, setToggleTab] = useState(true);
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem('history')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);
  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(history));
  }, [history]);

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
        />
      ) : (
        <TodoAppHistory
          todos={todos}
          setTodos={setTodos}
          history={history}
          setHistory={setHistory}
        />
      )}
    </main>
  );
}

export default App;
