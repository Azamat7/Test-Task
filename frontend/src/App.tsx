import * as React from "react"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import "./App.css"

import { Task } from "./components/Task"
import { AddTask } from "./components/AddTask"
import { addTask, getTasks } from "./store/actionCreators"
import { Dispatch } from "redux"

const App: React.FC = () => {
  const tasks: readonly ITask[] = useSelector(
    (state: TaskState) => state.tasks,
    shallowEqual
  )

  React.useEffect(() => {
    getTasks()(dispatch);
  },[])

  const dispatch: Dispatch<any> = useDispatch()

  const saveTask = React.useCallback(
    (task: any) => addTask(task)(dispatch),
    [dispatch]
  )

  return (
    <main>
      <h1>My Tasks</h1>
      <AddTask saveTask={saveTask} />
      {tasks.map((task: ITask) => (
        <Task
          key={task.id}
          task={task}
        />
      ))}
    </main>
  )
}

export default App