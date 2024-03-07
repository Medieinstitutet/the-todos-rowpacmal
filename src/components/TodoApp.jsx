import { useState, useEffect } from 'react';
import ShowTodoList from './ShowTodoList';
import getTodos from '../services/todoService';
import CreateNewTodo from './CreateNewTodo';

const TodoApp = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );

  useEffect(() => {
    if (todos.length > 0) return;
    getTodos(10);
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleTaskStatus = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, done: todo.done ? false : true };
        return todo;
      })
    );
  };

  const handleRemoveTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleNewTask = (task) => {
    let createNewId = Math.floor(Math.random() * 100) + 1;
    todos.forEach((todo) => {
      while (createNewId === todo.id) {
        createNewId = Math.floor(Math.random() * 100) + 1;
      }
    });
    setTodos([...todos, { id: createNewId, task: task, done: false }]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <CreateNewTodo handleNewTask={handleNewTask} />
      <ShowTodoList
        listData={todos}
        handleTaskStatus={handleTaskStatus}
        handleRemoveTask={handleRemoveTask}
      />
    </div>
  );
};

export default TodoApp;
