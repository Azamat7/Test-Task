import * as actionTypes from "./actionTypes"

const initialState: TaskState = {
  tasks: [],
  loading: true
}

const reducer = (
  state: TaskState = initialState,
  action: TaskAction
): TaskState => {
  switch (action.type) {

    case actionTypes.GET_TASKS:
      console.log('new state:', {
        ...state,
        tasks:action.payload,
        loading:false
      });
      return {
        ...state,
        tasks:action.payload,
        loading:false
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