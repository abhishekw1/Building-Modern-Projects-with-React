import { useState } from "react";
import React from "react";

const NewTodoForm = ({ addTodos }) => {
  const addNewTodos = (event) => {
    event.preventDefault();
    const newTodoValue = event.target.newInput.value;
    addTodos({ text: newTodoValue, checked: false });
    event.target.reset();
  };
  return (
    <form onSubmit={addNewTodos} className="new-todo-form">
      <input
        className="todo-input"
        type="text"
        placeholder="Type your new todo"
        name="newInput"
      />
      <button className="todo-btn" type="submit">
        Create Todo
      </button>
    </form>
  );
};

export default NewTodoForm;
