import { useState } from 'react';
import TodoItem from '../models/TodoItem';
import createRandomId from '../utils/createRandomId';

const CreateNewTodo = ({ todos, setTodos }) => {
  const [textInput, setTextInput] = useState('');

  const handleNewTask = (task) => {
    let id = createRandomId();
    todos.forEach((todo) => {
      while (id === todo.id) {
        id = createRandomId();
      }
    });
    setTodos([new TodoItem(id, task), ...todos]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.length > 0) handleNewTask(textInput);
    setTextInput('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New task..."
          value={textInput}
          onChange={(e) => {
            setTextInput(e.target.value);
          }}
        />
        <button>Add</button>
      </form>
    </>
  );
};

export default CreateNewTodo;
