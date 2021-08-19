export const TASK_CREATE = 'TASK_CREATE';
export const TASK_CHANGE_TEXT = 'TASK_CHANGE_TEXT';
export const TASK_DELETE = 'TASK_DELETE';
export const TASK_TOGGLE_DONE = 'TASK_TOGGLE_DONE';
export const TASKS_SET_ALL = 'TASKS_SET_ALL';
export const SET_SHOWN_TASKS = 'SET_SHOWN_TASKS';

export const taskCreate = taskText => ({
  type: TASK_CREATE,
  taskText,
});

export const taskChangeText = (id, taskText) => ({
  type: TASK_CHANGE_TEXT,
  id,
  taskText,
});

export const taskDelete = id => ({
  type: TASK_DELETE,
  id,
});

export const taskToggleDone = id => ({
  type: TASK_TOGGLE_DONE,
  id,
});

export const tasksSetAll = tasks => ({
  type: TASKS_SET_ALL,
  tasks,
});

export const setShownTasks = shownTasks => ({
  type: SET_SHOWN_TASKS,
  shownTasks,
});
