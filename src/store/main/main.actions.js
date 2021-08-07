export const TASK_CREATE = 'TASK_CREATE'

export const taskCreate = (taskText) => ({
  type: TASK_CREATE,
  payload: taskText,
})

