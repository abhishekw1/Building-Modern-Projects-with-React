import { createSelector } from "reselect";

export const getTodos = (state) => state.todos.data;
export const getTodosLoading = (state) => state.todos.isLoading;

export const getCompletedTodo = createSelector(getTodos, (todos) =>
  todos.filter((todo) => todo.isCompleted)
);

export const getIncompletedTodo = createSelector(getTodos, (todos) =>
  todos.filter((todo) => !todo.isCompleted)
);