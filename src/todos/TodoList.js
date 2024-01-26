import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import { removeTodo, markAsCompletedTodo } from "../store/action";

const ToDoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.text}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
          />
        ))
      ) : (
        <p>
          <b>No Todo List Found, Please add todo items !</b>
        </p>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text)),
  onCompletedPressed: (text) => dispatch(markAsCompletedTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
