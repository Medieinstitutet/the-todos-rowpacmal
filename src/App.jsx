import './styles/App.css';
import TodoApp from './components/TodoApp';
import { IconFileCode } from '@tabler/icons-react';

function App() {
  return (
    <main className="app">
      <header className="app-header">
        <h1>
          <IconFileCode size={'4rem'} /> LiteList
        </h1>
        <p>Clear. Simple. Done.</p>
      </header>
      <TodoApp />
    </main>
  );
}

export default App;
