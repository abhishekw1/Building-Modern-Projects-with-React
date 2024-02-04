import {
  CREATE_TODO,
  LOAD_TODO_FAILUER,
  LOAD_TODO_IN_PROGRESS,
  LOAD_TODO_SUCCESS,
  MARKASCOMPLETED_TODO,
  REMOVE_TODO,
} from "./action";

const initialState = { isLoading: false, data: [] };

export const todos = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TODO: {
      const { todo } = payload;
      return {
        ...state,
        data: state.data.concat(todo),
      };
    }
    case REMOVE_TODO: {
      const { todo: rtodo } = payload;
      return {
        ...state,
        data: state.data.filter((todo) => todo.id !== rtodo.id),
      };
    }
    case MARKASCOMPLETED_TODO: {
      const { todo: utodo } = payload;
      return {
        ...state,
        data: state.data.map((todo) => {
          if (todo.id === utodo.id) {
            return utodo;
          }
          return todo;
        }),
      };
    }
    case LOAD_TODO_SUCCESS: {
      const { todos } = payload;
      return {
        ...state,
        data: todos,
        isLoading: false,
      };
    }
    case LOAD_TODO_IN_PROGRESS:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_TODO_FAILUER:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};
