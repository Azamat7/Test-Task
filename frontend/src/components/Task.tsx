import * as React from "react"

type Props = {
  task: ITask
}

export const Task: React.FC<Props> = ({ task }) => {

  return (
    <div className="Task">
      <div>
        <h1>{task.name}</h1>
        <img src={task.image_url} style={{width: '60px', height:'60px'}}/>
      </div>
    </div>
  )
}