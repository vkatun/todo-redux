import { useState } from 'react';
import { ContentEditor } from '../ContentEditor/ContentEditor';
import { TaskWrapper, ButtonsWrapper } from './styled';
import { Button } from 'react-bootstrap';
import  { taskDelete, taskChangeCheckbox } from '../../../../../store/main/main.actions'
import { useDispatch } from 'react-redux';

export const Task = ({
  id,
  content,
  isChecked,
}) => {
  const [isEditorOpened, setIsEditorOpened] = useState(false);
  const dispatch = useDispatch()
  const deleteTask = () => dispatch(taskDelete(id))

  const handleCheckboxChange = () => dispatch(taskChangeCheckbox(id));

  return (
    <TaskWrapper key={id} id={id}>
      <input
        type='checkbox'
        checked={isChecked}
        onChange={() => handleCheckboxChange(id)}
      />
      {isEditorOpened ? (
        <ContentEditor id={id} content={content} />
      ) : (
        content
      )}
      <ButtonsWrapper>
        <Button
          variant='secondary'
          onClick={() => setIsEditorOpened(!isEditorOpened)}
        >
          редактировать
        </Button>
        <Button variant='danger' onClick={deleteTask}>
          x
        </Button>
      </ButtonsWrapper>
    </TaskWrapper>
  );
};
