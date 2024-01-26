import React, { useEffect, useState } from "react";

const TodoListItem = ({ todo, onRemovePressed,onCompletedPressed}) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const handleCheckboxChange = () => {
    setIsChecked(todo.isCompleted);
  };
  useEffect(() => {
    handleCheckboxChange();
  }, [todo.isCompleted]);
  return (
    <div className="list-item">
      <input
        className="form-check-input"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />

      <h3>{todo.text}</h3>
      <div className="btn-container">
        <button
          className="completed"
          onClick={() => onCompletedPressed(todo.text)}
        >
          Mark as Completed
        </button>
        <button className="remove" onClick={() => onRemovePressed(todo.text)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
