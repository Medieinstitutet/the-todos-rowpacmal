import { useState } from 'react';

const CreateNewTodo = ({ handleNewTask }) => {
  const [textInput, setTextInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (textInput.length > 0) handleNewTask(textInput);
    setTextInput('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={textInput}
        onChange={(e) => {
          setTextInput(e.target.value);
        }}
      />
      <button>Add</button>
    </form>
  );
};

export default CreateNewTodo;
