import React, { useState } from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";

const ToDoList = () => {
  const [todos, setTodos] = useState([]);

  const pushNewTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const popTodo = (ptodo) => {
    setTodos(todos.filter((todo) => todo.text !== ptodo));
  };
  const updateTodo = (utodo) => {
    const updatedTodo = todos.map((todo) => {
      if (todo.text === utodo.text) {
        todo.checked = !todo.checked;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };
  return (
    <div className="list-wrapper">
      <NewTodoForm addTodos={pushNewTodo} />
      {todos.length > 0 ? (
        todos.map((todo) => (
          <TodoListItem
            todo={todo}
            key={todo.text}
            removeTodo={popTodo}
            updateAsCompletedTodo={updateTodo}
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

export default ToDoList;
