import { useState } from 'react';
import { ContentEditor } from '../ContentEditor/ContentEditor';
import { TaskWrapper, ButtonsWrapper } from './styled';
import { Button } from 'react-bootstrap';
import {
  taskRemove,
  taskToggleDone,
} from '../../../../store/main/main.actions';
import { useDispatch } from 'react-redux';

export const Task = ({ id, content, isChecked }) => {
  const [isEditorOpened, setIsEditorOpened] = useState(false);
  const dispatch = useDispatch();
  const removeTask = () => dispatch(taskRemove(id));
  const handleEditorChange = () => setIsEditorOpened(pervState => !pervState);
  const handleCheckboxChange = () => dispatch(taskToggleDone(id));

  return (
    <TaskWrapper id={id}>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => handleCheckboxChange(id)}
      />
      {isEditorOpened ? <ContentEditor id={id} content={content} /> : content}
      <ButtonsWrapper>
        <Button variant='secondary' onClick={handleEditorChange}>
          редактировать
        </Button>
        <Button variant='danger' onClick={removeTask}>
          x
        </Button>
      </ButtonsWrapper>
    </TaskWrapper>
  );
};
