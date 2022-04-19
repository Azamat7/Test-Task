interface ITask {
  id: number
  name: string
  image_url: string
}

type TaskState = {
  tasks: Itask[]
  loading: boolean
}

type TaskAction = {
  type: string
  payload: any
}

type DispatchType = (args: TaskAction) => TaskAction