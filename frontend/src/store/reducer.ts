import * as actionTypes from "./actionTypes"

const initialState: TaskState = {
  tasks: [],
}

const reducer = (
  state: TaskState = initialState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      const newTask: ITask = {
        id: Math.random(),
        name: action.task.name,
        image_url: action.task.image_url,
      }
      return {
        ...state,
        tasks: state.tasks.concat(newTask),
      }
  }
  return state
}

export default reducer