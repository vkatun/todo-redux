import React, { useState, useEffect } from 'react';
import { Control } from './components/Control/Control';
import { List } from './components/List/List';
import { AppWrapper } from './styled';
import { useSelector, useDispatch } from 'react-redux'
import  { taskCreate } from '../../../store/main/main.actions'

export const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (localStorage.getItem('tasks')) {
      setTasks(JSON.parse(localStorage.getItem('tasks')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDeleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleCheckboxChecked = id => {
    const updatedTasks = tasks.map(task =>
      task.id === id ? { ...task, isChecked: !task.isChecked } : task,
    );
    setTasks(updatedTasks);
  };

  const editTask = (id, taskText) => {
    const newTaskText = tasks.map(task =>
      task.id === id ? { ...task, content: taskText } : task,
    );
    setTasks(newTaskText);
  };

  // const handleSumbitСontent = inputText => {
  //   setTasks([
  //     ...tasks,
  //     { content: inputText, isChecked: false, id: Math.random() * 1000 },
  //   ]);
  // };
  const dispatch = useDispatch()
  const handleSumbitСontent = inputText => {
    dispatch(taskCreate(inputText))
  };

  return (
    <AppWrapper>
      <Control
        tasks={tasks}
        setTasks={setTasks}
        handleSumbitСontent={handleSumbitСontent}
      />
      <List
        tasks={tasks}
        setTasks={setTasks}
        handleDeleteTask={handleDeleteTask}
        handleCheckboxChecked={handleCheckboxChecked}
        editTask={editTask}
      />
    </AppWrapper>
  );
};
export default App;
