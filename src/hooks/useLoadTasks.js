import { useEffect } from 'react';
import { tasksSetAll } from '../store/main/main.actions';
import { useDispatch } from 'react-redux';

export const useLoadTasks = tasks => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }
  }, [tasks]);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks.length > 0) {
      dispatch(tasksSetAll(savedTasks));
    }
  }, []);
};
