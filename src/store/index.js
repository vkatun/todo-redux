
import { createStore } from 'redux';
import { handleTaskCreate } from './main/main.reducers';


const configureStore = initialState => {
  const store = createStore(
  handleTaskCreate,
  initialState,
  )
  return store
}

export default configureStore