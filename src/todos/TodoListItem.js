import React, { useEffect, useState } from "react";

const TodoListItem = ({ todo, removeTodo, updateAsCompletedTodo }) => {
  const [isChecked, setIsChecked] = useState(todo.checked);
  const handleCheckboxChange = () => {
    setIsChecked(todo.checked);
  };
  useEffect(() => {
    handleCheckboxChange();
  }, [todo.checked]);
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
          onClick={() => updateAsCompletedTodo(todo)}
        >
          Mark as Completed
        </button>
        <button className="remove" onClick={() => removeTodo(todo.text)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default TodoListItem;
