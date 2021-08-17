import { TASK_CHANGE_TEXT, TASK_CREATE, TASK_DELETE, TASK_CHANGE_CHECKBOX, TASKS_SET, SET_SHOWN_TASKS } from './main.actions'

const initialState = {
  tasks: [],
  shownTasks: 'showAll',
}

const handleTaskCreate = (state, action) => {
  return {
    ...state,
    tasks: [...state.tasks, {content: action.taskText, isChecked: false, id: Math.random() * 1000}]
  }
}

const handleChangeTaskText = (state, action) => {
  return {
    ...state,
    tasks: [...state.tasks.map(task => task.id === action.id ? {...task, content: action.taskText } : task)]
  }
}

const handleTaskDelete = (state, action) => {
  return {
    ...state,
    tasks: [...state.tasks.filter(task => task.id !== action.id)]
  }
}

const handleCheckboxChange = (state, action) => {
  return {
    ...state,
    tasks: [...state.tasks.map(task => task.id === action.id ? {...task, isChecked: !task.isChecked } : task)]
  }
}

const handleTasksSet = (state, action) => {
  return {
    ...state,
    tasks: action.tasks
  }
}

const handleSetShownTasks = (state, action) => {
  return {
  ...state,
  shownTasks: action.shownTasks
  }
}

export const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_CREATE:
      return handleTaskCreate(state, action);
    case TASK_CHANGE_TEXT:
      return handleChangeTaskText(state, action);
    case TASK_DELETE:
      return handleTaskDelete(state, action);
    case TASK_CHANGE_CHECKBOX:
      return handleCheckboxChange(state, action);
    case TASKS_SET:
      return handleTasksSet(state, action);
    case SET_SHOWN_TASKS:
      return handleSetShownTasks(state, action);
    default:
      return state;
  }
}
