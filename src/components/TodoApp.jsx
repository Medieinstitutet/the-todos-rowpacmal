import { useState, useEffect } from 'react';
import ShowTodoList from './ShowTodoList';
import CreateNewTodo from './CreateNewTodo';
import ManageTodoList from './ManageTodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todo-app-wrapper">
      <section className="todo-app">
        <header>
          <h2>Todo List</h2>
        </header>
        <CreateNewTodo
          todos={todos}
          setTodos={setTodos}
        />
        <ManageTodoList setTodos={setTodos} />
        <ShowTodoList
          todos={todos}
          setTodos={setTodos}
        />
      </section>
    </div>
  );
};

export default TodoApp;
