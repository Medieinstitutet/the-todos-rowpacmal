import { useState, useEffect } from 'react';
import ShowTodoList from './ShowTodoList';
import getTodos from '../services/todoService';
import CreateNewTodo from './CreateNewTodo';
import TodoItem from '../models/TodoItem';
import createRandomId from '../utils/createRandomId';

const TodoApp = () => {
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem('todos')) || []
  );
  const [sort, setSort] = useState('descendingDone');

  const handleSortTask = (type) => {
    switch (type) {
      case 'descendingDone':
        setTodos([...todos].sort((a, b) => a.done - b.done));
        break;

      case 'ascendingDone':
        setTodos([...todos].sort((a, b) => b.done - a.done));
        break;

      case 'descendingTask':
        setTodos(
          [...todos].sort((a, b) => {
            if (a.task.toLowerCase() < b.task.toLowerCase()) {
              return -1;
            }
            if (a.task.toLowerCase() > b.task.toLowerCase()) {
              return 1;
            }
            return 0;
          })
        );
        break;

      case 'ascendingTask':
        setTodos(
          [...todos].sort((a, b) => {
            if (a.task.toLowerCase() < b.task.toLowerCase()) {
              return 1;
            }
            if (a.task.toLowerCase() > b.task.toLowerCase()) {
              return -1;
            }
            return 0;
          })
        );
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    if (todos.length > 0) return;
    getTodos(10);
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    handleSortTask(sort);
  }, [sort]);

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
    let id = createRandomId();
    todos.forEach((todo) => {
      while (id === todo.id) {
        id = createRandomId();
      }
    });
    setTodos([...todos, new TodoItem(id, task)]);
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
      <button
        onClick={() => {
          sort === 'descendingTask'
            ? setSort('ascendingTask')
            : setSort('descendingTask');
          handleSortTask(sort);
        }}
      >
        Sort
      </button>
    </div>
  );
};

export default TodoApp;
