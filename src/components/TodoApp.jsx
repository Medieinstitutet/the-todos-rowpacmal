import { useState, useEffect } from 'react';
import ShowTodoList from './ShowTodoList';
import CreateNewTodo from './CreateNewTodo';

import SortTodoList from './SortTodoList';
import ManageTodoList from './ManageTodoList';

const TodoApp = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <section>
      <header>
        <h2>Todo List</h2>
      </header>
      <CreateNewTodo
        todos={todos}
        setTodos={setTodos}
      />
      <ShowTodoList
        todos={todos}
        setTodos={setTodos}
      />
      <ManageTodoList setTodos={setTodos} />
    </section>
  );
};

export default TodoApp;
