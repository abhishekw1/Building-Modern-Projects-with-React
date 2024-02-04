import React from "react";
import { connect } from "react-redux";
import { addTodoRequest } from "../store/thunks";
import { getTodos } from "../store/selector";
const NewTodoForm = ({ todos, onCreatePressed }) => {
  const addNewTodos = (event) => {
    event.preventDefault();
    const newTodo = event.target.newInput.value;
    const isDuplicateText = todos.some((todo) => todo.text === newTodo);
    if (!isDuplicateText && newTodo) {
      onCreatePressed(newTodo);
      event.target.reset();
    }
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
const mapStateToProps = (state) => ({
  todos: getTodos(state),
});
const mapDispatchToProps = (dispatch) => ({
  onCreatePressed: (text) => dispatch(addTodoRequest(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTodoForm);
