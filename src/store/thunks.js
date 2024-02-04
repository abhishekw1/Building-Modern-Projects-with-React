import {
  createTodo,
  loadTodosFailuer,
  loadTodosInProgress,
  loadTodosSuccess,
  markAsCompletedTodo,
  removeTodo
} from "./action";

export const loadTodos = () => async (dispatch, getState) => {
  try {
    dispatch(loadTodosInProgress());
    const response = await fetch("http://localhost:8080/todos");
    const todos = await response.json();
    dispatch(loadTodosSuccess(todos));
  } catch (error) {
    dispatch(loadTodosFailuer());
    dislayAlert(error);
  }
};

export const addTodoRequest = (text) => async (dispatch) => {
  try {
    const body = JSON.stringify({ text });
    const response = await fetch("http://localhost:8080/todos", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "post",
      body,
    });
    const todo = await response.json();
    dispatch(createTodo(todo));
  } catch (error) {
    dispatch(dislayAlert(error));
  }
};

export const markCompletedRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(
      `http://localhost:8080/todos/${id}/completed`,
      {
        method: "post",
      }
    );
    const todo = await response.json();
    dispatch(markAsCompletedTodo(todo));
  } catch (error) {
    dispatch(dislayAlert(error));
  }
};
export const remvoveTodoRequest = (id) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8080/todos/${id}`, {
      method: "delete",
    });
    const todo = await response.json();
    dispatch(removeTodo(todo));
  } catch (error) {
    dispatch(dislayAlert(error));
  }
};

export const dislayAlert = () => (text) => {
  alert("Failed with error:", text);
};
