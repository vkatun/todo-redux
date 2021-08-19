import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Button, FormControl } from 'react-bootstrap';
import { ControlWrapper, InputWrapper, ButtonWrapper } from './styled';
import { taskCreate } from '../../../../store/main/main.actions';
import { DropdownMenu } from '../DropdownMenu/DropdownMenu';

export const Control = () => {
  const [inputText, setInputText] = useState('');

  const dispatch = useDispatch();

  const handleText = e => {
    setInputText(e.target.value);
  };

  const handleContent = () => {
    if (inputText) {
      dispatch(taskCreate(inputText));
    }
    setInputText('');
  };

  const handleEnterDown = e => {
    if (e.key === 'Enter') {
      handleContent();
    }
  };

  return (
    <ControlWrapper>
      <ButtonWrapper>
        <Button variant='success' onClick={handleContent}>
          Добавить задачу
        </Button>
      </ButtonWrapper>
      <InputWrapper>
        <FormControl
          placeholder='Введите задачу'
          onChange={handleText}
          value={inputText}
          onKeyDown={handleEnterDown}
        />
      </InputWrapper>
      <DropdownMenu />
    </ControlWrapper>
  );
};
