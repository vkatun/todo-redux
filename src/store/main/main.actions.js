export const TASK_CREATE = 'TASK_CREATE';
export const TASK_CHANGE_TEXT = 'TASK_CHANGE_TEXT';
export const TASK_DELETE = 'TASK_DELETE';
export const TASK_CHANGE_CHECKBOX = 'TASK_CHANGE_CHECKBOX';
export const TASKS_SET = 'TASKS_SET';
export const SET_SHOWN_TASKS = 'SET_SHOWN_TASKS';


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

export const tasksSet = tasks => ({
  type: TASKS_SET,
  tasks,
})

export const setShownTasks = shownTasks => ({
  type: SET_SHOWN_TASKS,
  shownTasks,
})
