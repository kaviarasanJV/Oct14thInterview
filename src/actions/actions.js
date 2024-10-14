import {ADD_TASKS,GET_TASKS_FROM_API,DELETE_TASKS,UPDATE_TASKS } from '../actionTypes';

export const GetAPIData =()=>{
    return(dispatch)=>{

        try{
           const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
           dispatch({type: GET_TASKS_FROM_API, payload : await response.json})
        }catch(error){
            dispatch({type: GET_TASKS_FROM_API, payload : error})
        }
    }
}
export const AddNewTask=(UserinputObj)=>{
    type: ADD_TASKS
    payload:  UserinputObj
}

export const DeletetodoTask=(id)=>{
    type: DELETE_TASKS
    payload:
}

export const handleCheckboxTask=()=>{
    type: UPDATE_TASKS
    payload:
}