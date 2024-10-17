import {
  ADD_TASKS,
  GET_TASKS_FROM_API,
  DELETE_TASKS,
  UPDATE_TASKS,
} from "../actionTypes";

export const GetAPIData = () => {
  return (dispatch) => {
    try {
      const response = axios.get("https://jsonplaceholder.typicode.com/todos");
      dispatch({ type: GET_TASKS_FROM_API, payload: response.json });
    } catch (error) {
      dispatch({ type: GET_TASKS_FROM_API, payload: error });
    }
  };
};
export const AddNewTask = (UserinputObj) => {
  dispatch({ type: ADD_TASKS, payload: { UserinputObj } });
};

export const DeletetodoTask = (id) => {
  dispatch({ type: DELETE_TASKS, payload: id });
};

export const handleCheckboxTask = (id) => {
  dispatch({ type: UPDATE_TASKS, payload: id });
};
