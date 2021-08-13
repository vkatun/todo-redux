import { TASK_CHANGE_TEXT, TASK_CREATE, TASK_DELETE, TASK_CHANGE_CHECKBOX } from './main.actions'

const initialState = {
  tasks: [
    {
    content:"2342",
    isChecked:true,
    id:616.6338397637521,
    }
  ],
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


// const handleCheckboxChecked = id => {
//   const updatedTasks = tasks.map(task =>
//     task.id === id ? { ...task, isChecked: !task.isChecked } : task,
//   );
//   setTasks(updatedTasks);
// };




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
    default:
      return state;
  }
}











// const handleBreweriesRequest = (state, action) => {
//   return {
//     ...state,
//     isLoading: true,
//   }
  
// }

// const handleBreweriesSuccess = (state, action) => {
//   if(action.breweries) {
//     return {
//       ...state,
//       breweries: action.breweries,
//       isLoading: false,
//     }
//   }

//   return state
// }


// export const mainReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BREWERIES_REQUEST:
//       return handleBreweriesRequest(state, action);
//     case BREWERIES_SUCCESS:
//       return handleBreweriesSuccess(state, action); 
//     default:
//        return state;
//   }
// }