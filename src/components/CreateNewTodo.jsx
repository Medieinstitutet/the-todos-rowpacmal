import { useState } from 'react';
import TodoItem from '../models/TodoItem';
import createRandomId from '../utils/createRandomId';
import getTodaysDate from '../utils/getTodaysDate';
import { IconPlus } from '@tabler/icons-react';

const CreateNewTodo = ({ todos, setTodos }) => {
  const [textInput, setTextInput] = useState('');
  const [validateInput, setValidateInput] = useState(false);

  const handleNewTask = (task) => {
    let id = createRandomId();
    todos.forEach((todo) => {
      while (id === todo.id) {
        id = createRandomId();
      }
    });
    setTodos([new TodoItem(id, task, getTodaysDate()), ...todos]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.length > 0) {
      handleNewTask(textInput);
      setValidateInput(false);
    } else {
      setValidateInput(true);
    }
    setTextInput('');
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="todo-list-form"
      >
        {validateInput && (
          <p className="highlight-text input-validation">
            *Please enter a task to add
          </p>
        )}
        <label className="add-new-item">
          <input
            type="search"
            placeholder="Add a new task..."
            value={textInput}
            onChange={(e) => {
              setTextInput(e.target.value);
            }}
          />
          <div>
            <button>
              <IconPlus />
            </button>
          </div>
        </label>
      </form>
    </>
  );
};

export default CreateNewTodo;
