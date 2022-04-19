import * as actionTypes from "./actionTypes"
import axios from 'axios'


export function addTask(task: any) {

  return async function(dispatch: DispatchType) {
    const formData = new FormData();
    formData.append("file", task.file);
    formData.append("name", task.name);
    formData.append("image_url", task.image_url);
    try{
      const res = await axios({
        method: "post",
        url:`http://localhost:3001/tasks`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      })
      console.log(res.data)
      const action: TaskAction = {
        type: actionTypes.ADD_TASK,
        payload: res.data,
      }
      dispatch(action)
    } catch(e) {
      console.log(e)
    }
  }
}

export function getTasks() {
  return async function(dispatch: DispatchType) {
    try{
      const res = await axios.get(`http://localhost:3001/tasks`)
      dispatch( {
          type: actionTypes.GET_TASKS,
          payload: res.data
      })
    } catch(e) {
      console.log(e)
    }
  }
} 

export function simulateHttpRequest(action: TaskAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}