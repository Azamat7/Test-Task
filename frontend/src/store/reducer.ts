import * as actionTypes from "./actionTypes"

const initialState: TaskState = {
  tasks: [],
  loading: false
}

const reducer = (
  state: TaskState = initialState,
  action: TaskAction
): TaskState => {
  switch (action.type) {

    case actionTypes.SET_LOADING:
      return {
        ...state,
        loading:action.payload
      }

    case actionTypes.GET_TASKS:
      return {
        ...state,
        tasks:action.payload,
      }

    case actionTypes.ADD_TASK:
      const newTask: ITask = {
        id: Math.random(),
        name: action.payload.name,
        image_url: action.payload.image_url,
      }
      return {
        ...state,
        tasks: state.tasks.concat(newTask),
      }
  }
  return state
}

export default reducer