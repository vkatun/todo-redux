import React, { useEffect } from 'react';
import { Control } from './components/Control/Control';
import { List } from './components/List/List';
import { AppWrapper } from './styled';
import { useSelector, useDispatch } from 'react-redux';
import { tasksSet } from '../../store/main/main.actions';

export const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(state => state.main.tasks);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks.length > 0) {
      dispatch(tasksSet(savedTasks));
    }
  }, []);

  return (
    <AppWrapper>
      <Control />
      <List />
    </AppWrapper>
  );
};
export default App;
