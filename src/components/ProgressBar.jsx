import { useEffect, useState } from 'react';

const ProgressBar = ({ todos }) => {
  const [filled, setFilled] = useState(0);

  useEffect(() => {
    let doneCount = 0;
    todos.forEach((todo) => {
      todo.done && doneCount++;
    });
    const calculateFill = (doneCount / todos.length) * 100;
    setFilled(calculateFill.toFixed(0));
  }, [todos]);

  return (
    <div className="progressbar-wrapper">
      <div className="progressbar">
        <div
          className="progress"
          style={{ width: `${filled}%` }}
        ></div>
        <div className="progressbar-percentage">
          <span>{filled}</span>
          <span>%</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
