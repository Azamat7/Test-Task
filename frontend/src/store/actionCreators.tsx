import * as actionTypes from "./actionTypes"

export function addTask(task: ITask) {
  const action: TaskAction = {
    type: actionTypes.ADD_TASK,
    task,
  }

  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: TaskAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}