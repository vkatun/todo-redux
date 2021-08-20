import React from 'react';
import { Control } from './components/Control/Control';
import { List } from './components/List/List';
import { AppWrapper } from './styled';
import { useSelector } from 'react-redux';
import { useLoadTasks } from '../../hooks/useLoadTasks';

export const App = () => {
  const tasks = useSelector(state => state.main.tasks);
  useLoadTasks(tasks);
  return (
    <AppWrapper>
      <Control />
      <List />
    </AppWrapper>
  );
};
export default App;
