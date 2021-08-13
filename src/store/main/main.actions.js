export const TASK_CREATE = 'TASK_CREATE';
export const TASK_CHANGE_TEXT = 'TASK_CHANGE_TEXT';
export const TASK_DELETE = 'TASK_DELETE';
export const TASK_CHANGE_CHECKBOX = 'TASK_CHANGE_CHECKBOX';

export const taskCreate = taskText => ({
  type: TASK_CREATE,
  taskText,
});

export const taskChangeText = (id, taskText) => ({
  type: TASK_CHANGE_TEXT,
  id,
  taskText,
})

export const taskDelete = id => ({
  type:TASK_DELETE,
  id,
})


export const taskChangeCheckbox = id => ({
  type:TASK_CHANGE_CHECKBOX,
  id,
})