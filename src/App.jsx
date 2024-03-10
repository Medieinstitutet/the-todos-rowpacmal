import './styles/App.css';
import AppHeader from './components/AppHeader';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <main className="app">
      <AppHeader />
      <TodoApp />
    </main>
  );
}

export default App;
