import axios from "axios";
import { GET_TASKS_SUCCESS } from "../types";

export const getTasks = () => async (dispatch) => {
  try {
    const { data } = await axios.get("http://localhost:8000/api/tasks/all");
    console.log(data);
    dispatch({
      type: GET_TASKS_SUCCESS,
      payload: data[0],
    });
  } catch (error) {}
};

export const assignTask = (taskID, userID) => async (dispatch) => {
    try {
      console.log(taskID,userID);
    await axios.put("http://localhost:8000/api/tasks/assign", {});

    dispatch(getTasks());
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteTask = (task_id) => async (dispatch) => {
  try {
    await axios.put("http://localhost:8000/api/tasks/delete",{task_id})

    dispatch(getTasks());
  } catch (error) {
    console.log(error.message);
  }
};

