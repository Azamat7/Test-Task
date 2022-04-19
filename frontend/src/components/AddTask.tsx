import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { addTask, setLoading } from "../store/actionCreators";
import "./AddTask.css";

export const AddTask = () => {
  const [task, setTask] = React.useState<string>('');
  const [file, setFile] = React.useState<File | null>(null);

  const dispatch: Dispatch<any> = useDispatch();
  const saveTask = React.useCallback(
    (task: TaskUpload) => addTask(task, dispatch),
    [dispatch]
  );

  const loading: boolean = useSelector(
    (state: TaskState) => state.loading,
  )

  const handleTaskData = (e: React.FormEvent<HTMLInputElement>) => {
    setTask(e.currentTarget.value)
  };

  const handleTaskDataFile = (e: React.FormEvent<HTMLInputElement>) => {
    const files = (e.target as HTMLInputElement).files
    if (!files) return;
    setFile(files[0]);
  };

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true, dispatch);
    if (file !== null) {
      saveTask({
        name: task,
        file
      });
    }
    setTask('');
    setFile(null);
  };

  const buttonDisabled = task === '' || file === null;

  return (
    <div className="add-task">
      <form onSubmit={addNewTask}>
        <input
          type="text"
          id="name"
          placeholder="Task"
          value={task}
          onChange={handleTaskData}
        />
        <input
          type="file"
          id="file"
          placeholder="File"
          onChange={handleTaskDataFile}
        />
        <button disabled={buttonDisabled} className={buttonDisabled ? 'disabled' : ''}>
          Add task
        </button>
      </form>
      {loading && <p>uploading the image...</p>}
    </div>
  );
};