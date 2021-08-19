import { useState, useEffect } from 'react';
import { Input } from './styled';
import { useDispatch } from 'react-redux';
import  { taskChangeText } from '../../../../../store/main/main.actions';

export const ContentEditor = ({ content, id }) => {
  const dispatch = useDispatch()
  const [taskText, setTaskText] = useState(content);
  
  const handleEdit = () => dispatch(taskChangeText(id, taskText))
 
  useEffect(handleEdit, [taskText]);

  const handleText = e => {
    setTaskText(e.target.value);
  };

  return <Input value={taskText} onChange={handleText} />;
};
