import * as React from "react"

type Props = {
  saveTask: (task: ITask | any) => void
}

export const AddTask: React.FC<Props> = ({ saveTask }) => {
  const [task, setTask] = React.useState<ITask | {}>()

  const handleTaskData = (e: React.FormEvent<HTMLInputElement>) => {
    setTask({
      ...task,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewTask = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(task)
    saveTask(task)
  }

  return (
    <form onSubmit={addNewTask} className="Add-task">
      <input
        type="text"
        id="name"
        placeholder="Task"
        onChange={handleTaskData}
      />
      <input
        type="text"
        id="image_url"
        placeholder="Url"
        onChange={handleTaskData}
      />
      <input
        type="file"
        id="file"
        placeholder="File"
        onChange={handleTaskData}
      />
      <button disabled={task === undefined ? true : false}>
        Add task
      </button>
    </form>
  )
}