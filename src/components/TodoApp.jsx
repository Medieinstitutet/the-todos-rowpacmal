import ShowTodoList from './ShowTodoList';
import CreateNewTodo from './CreateNewTodo';
import ManageTodoList from './ManageTodoList';
import ScrollToTop from './ScrollToTop';

const TodoApp = ({
  todos,
  setTodos,
  history,
  setHistory,
  SortBy,
  sortByDone,
  setSortByDone,
  sortByName,
  setSortByName,
}) => {
  const handleSortBy = (sortType) => {
    switch (sortType) {
      case 'done':
        setTodos(SortBy.done.switch(todos, sortByDone, setSortByDone));
        setSortByName('none');
        break;

      case 'name':
        setTodos(SortBy.name.switch(todos, sortByName, setSortByName));
        setSortByDone('none');
        break;

      default:
        throw new Error(`${sortType} is not a valid type.`);
    }
  };

  const handleSortedBasedOnState = (list) => {
    if (sortByDone !== 'none')
      setTodos(SortBy.done.noSwitch(list, sortByDone, setSortByDone));

    if (sortByName !== 'none')
      setTodos(SortBy.name.noSwitch(list, sortByName, setSortByName));
  };

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
          setHistory={setHistory}
          handleSortedBasedOnState={handleSortedBasedOnState}
        />

        <ManageTodoList
          todos={todos}
          setTodos={setTodos}
          history={history}
          setHistory={setHistory}
          handleSortedBasedOnState={handleSortedBasedOnState}
        />

        <ShowTodoList
          todos={todos}
          setTodos={setTodos}
          sortByDone={sortByDone}
          sortByName={sortByName}
          handleSortBy={handleSortBy}
          handleSortedBasedOnState={handleSortedBasedOnState}
        />

        {todos.length > 5 && <ScrollToTop />}
      </section>
    </div>
  );
};

export default TodoApp;
