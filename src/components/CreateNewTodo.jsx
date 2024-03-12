import { useState } from 'react';
import TodoItem from '../models/TodoItem';
import createRandomId from '../utils/createRandomId';
import getTodaysDate from '../utils/getTodaysDate';
import { IconPlus } from '@tabler/icons-react';
import SortBy from '../utils/SortBy';

const CreateNewTodo = ({
  todos,
  setTodos,
  history,
  setHistory,
  sortByDone,
  setSortByDone,
  sortByName,
  setSortByName,
}) => {
  const [textInput, setTextInput] = useState('');
  const [validateInput, setValidateInput] = useState(false);

  const handleNewTask = (task) => {
    const id = createRandomId();
    const date = getTodaysDate();
    const listWithNewTask = [new TodoItem(id, task, date), ...todos];
    setHistory([...listWithNewTask]);
    if (sortByDone !== 'none')
      setTodos(
        SortBy.done.noSwitch(listWithNewTask, sortByDone, setSortByDone)
      );
    if (sortByName !== 'none')
      setTodos(
        SortBy.name.noSwitch(listWithNewTask, sortByName, setSortByName)
      );
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
            type="text"
            placeholder="Add a new task..."
            value={textInput}
            onChange={(e) => {
              setTextInput(e.target.value);
            }}
            className="test"
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
