export const TASK_CREATE = 'TASK_CREATE';
export const TASK_CHANGE_TEXT = 'TASK_CHANGE_TEXT';
export const TASK_REMOVE = 'TASK_REMOVE';
export const TASK_CHANGE_CHECKBOX = 'TASK_CHANGE_CHECKBOX';
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

export const taskRemove = id => ({
  type: TASK_REMOVE,
  id,
});

export const taskToggleDone = id => ({
  type: TASK_CHANGE_CHECKBOX,
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
