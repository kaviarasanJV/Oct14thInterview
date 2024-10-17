import {
  ADD_TASKS,
  GET_TASKS_FROM_API,
  DELETE_TASKS,
  UPDATE_TASKS,
} from "../actionTypes";
///project/workspace/actionTypes.js
const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const taskManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASKS_FROM_API:
      return { ...state, todos: action.payload };
    case ADD_TASKS:
      return { ...state, todos: action.payload };
    case DELETE_TASKS:
      return {
        ...state,
        todos: [...state.todos.filter((todo) => todo.id !== action.payload)],
      };
    case UPDATE_TASKS:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
  }
};
export default taskManagerReducer;
