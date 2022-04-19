import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import { Tasks } from "./components/Tasks";
import { AddTask } from "./components/AddTask";
import { getTasks } from "./store/actionCreators";
import { Dispatch } from "redux";
import "./App.css";

const App: React.FC = () => {
  const tasks: ITask[] = useSelector(
    (state: TaskState) => state.tasks,
    shallowEqual
  );
  
  const dispatch: Dispatch<any> = useDispatch();

  React.useEffect(() => {
    getTasks(dispatch);
  },[]);

  return (
    <main className="App">
      <h1>My Tasks</h1>
      <AddTask />
      <Tasks tasks={tasks} />
    </main>
  );
};

export default App;