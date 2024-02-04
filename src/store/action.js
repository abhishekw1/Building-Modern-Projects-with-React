export const CREATE_TODO = "CREATE_TODO";

export const createTodo = (todo) => ({
  type: CREATE_TODO,
  payload: { todo },
});

export const REMOVE_TODO = "REMOVE_TODO";

export const removeTodo = (todo) => ({
  type: REMOVE_TODO,
  payload: { todo },
});

export const MARKASCOMPLETED_TODO = "MARKASCOMPLETED_TODO";

export const markAsCompletedTodo = (todo) => ({
  type: MARKASCOMPLETED_TODO,
  payload: { todo },
});

export const LOAD_TODO_IN_PROGRESS = "LOAD_TODO_IN_PROGRESS";

export const loadTodosInProgress = () => ({
  type: LOAD_TODO_IN_PROGRESS,
});
export const LOAD_TODO_SUCCESS = "LOAD_TODO_SUCCESS";
export const loadTodosSuccess = (todos) => ({
  type: LOAD_TODO_SUCCESS,
  payload: { todos },
});

export const LOAD_TODO_FAILUER = "LOAD_TODO_FAILUER";
export const loadTodosFailuer = () => ({
  type: LOAD_TODO_FAILUER,
});
