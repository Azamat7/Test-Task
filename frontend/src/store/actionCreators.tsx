import * as actionTypes from "./actionTypes"
import axios from 'axios'

export function setLoading(loading: boolean, dispatch: DispatchType) {
  const action: TaskAction = {
    type: actionTypes.SET_LOADING,
    payload: loading,
  }
  dispatch(action);
}

export async function addTask(task: TaskUpload, dispatch: DispatchType) {
  const formData = new FormData();
  formData.append("file", task.file);
  formData.append("name", task.name);

  try{
    const res = await axios({
      method: "post",
      url:`${process.env.REACT_APP_API_BASE}/tasks`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    })

    const action: TaskAction = {
      type: actionTypes.ADD_TASK,
      payload: res.data,
    }
    dispatch(action);
    setLoading(false, dispatch);
  } catch(e) {
    console.log(e)
  }
}

export async function getTasks(dispatch: DispatchType) {
  try{
    const res = await axios.get(`${process.env.REACT_APP_API_BASE}/tasks`)
    dispatch( {
        type: actionTypes.GET_TASKS,
        payload: res.data
    })
  } catch(e) {
    console.log(e)
  }
} 
