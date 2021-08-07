import { TASK_CREATE } from './main.actions'

const initialState = {
  tasks: [],
}

export const handleTaskCreate = (state = initialState, action) => {
  switch (action.type) {
    case TASK_CREATE:
      return {
      ...state,
      tasks: [...state.tasks, {content: action.payload, isChecked: false, id: Math.random() * 1000}]
      }
       default:
       return state;
  }
}