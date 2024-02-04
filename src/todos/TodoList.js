import React, { useEffect } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import { connect } from "react-redux";
import {
  loadTodos,
  markCompletedRequest,
  remvoveTodoRequest,
} from "../store/thunks";
import {
  getTodos,
  getTodosLoading,
  getCompletedTodo,
  getIncompletedTodo,
} from "../store/selector";
const ToDoList = ({
  todos = [],
  completedTodos = [],
  incompletedTodos = [],
  isLoading,
  onRemovePressed,
  onCompletedPressed,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);
  const loadingMessage = <div>Loading todos....</div>;
  const content = (
    <div className="list-wrapper">
      <NewTodoForm />
      <h3>In Complete Todos</h3>
      {incompletedTodos.length > 0 ? (
        incompletedTodos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.text}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
          />
        ))
      ) : (
        <p>
          <b>All todo completed, Please add new todo!</b>
        </p>
      )}
      <hr/>
      <h3>Completed Todos</h3>
      {completedTodos.length > 0 ? (
        completedTodos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.text}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}
          />
        ))
      ) : (
        <p>
          <b>No Completed todos list found, Please complete todo one by one</b>
        </p>
      )}
    </div>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  todos: getTodos(state),
  isLoading: getTodosLoading(state),
  completedTodos: getCompletedTodo(state),
  incompletedTodos: getIncompletedTodo(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(remvoveTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
