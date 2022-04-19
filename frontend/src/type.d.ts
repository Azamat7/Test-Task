interface ITask {
  id: number
  name: string
  image_url: string
}

interface TaskUpload {
  name: string,
  file: File
}

type TaskState = {
  tasks: Itask[]
  loading: boolean
}

type TaskAction = {
  type: string
  payload: Itask | TaskUpload | boolean
}

type DispatchType = (args: TaskAction) => TaskAction