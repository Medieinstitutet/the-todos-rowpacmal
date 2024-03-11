import ShowTodoList from './ShowTodoList';
import CreateNewTodo from './CreateNewTodo';
import ManageTodoList from './ManageTodoList';
import ScrollToTop from './ScrollToTop';

const TodoApp = ({ todos, setTodos, history, setHistory }) => {
  return (
    <div className="todo-app-wrapper">
      <section className="todo-app">
        <header className="todo-app-header">
          <h2>
            <span>To Do</span> List
          </h2>
        </header>
        <CreateNewTodo
          todos={todos}
          setTodos={setTodos}
          history={history}
          setHistory={setHistory}
        />
        <ManageTodoList
          todos={todos}
          setTodos={setTodos}
          history={history}
          setHistory={setHistory}
        />
        <ShowTodoList
          todos={todos}
          setTodos={setTodos}
        />
        {todos.length > 5 && <ScrollToTop />}
      </section>
    </div>
  );
};

export default TodoApp;
