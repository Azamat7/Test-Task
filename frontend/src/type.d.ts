interface ITask {
  id: number
  name: string
  image_url: string
}

type TaskState = {
  tasks: Itask[]
}

type TaskAction = {
  type: string
  task: ITask
}

type DispatchType = (args: TaskAction) => TaskAction