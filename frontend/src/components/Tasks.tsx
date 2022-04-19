import * as React from "react";
import "./Tasks.css";

type Props = {
  tasks: ITask[]
}

export const Tasks: React.FC<Props> = ({ tasks }) => {
  return (
    <table className="styled-table">
      <thead>
        <tr>
          <th>Task</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task: ITask) => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td><img src={task.image_url} className="task-image" /></td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}