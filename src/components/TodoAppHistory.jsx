import ShowHistory from './ShowHistory';
import ScrollToTop from './ScrollToTop';

const TodoAppHistory = ({ todos, setTodos, history, setHistory }) => {
  return (
    <div className="todo-app-wrapper">
      <section className="todo-app">
        <header className="todo-app-header">
          <h2>History</h2>
        </header>
        <ShowHistory history={history} />
        {history.length > 10 && <ScrollToTop />}
      </section>
    </div>
  );
};

export default TodoAppHistory;
