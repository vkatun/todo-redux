import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShownTasks } from '../../../../store/main/main.actions';

const dropdownMenuItems = [
  { title: 'Все задачи', action: 'showAll' },
  { title: 'Только выполненные задачи', action: 'onlyCompleted' },
  { title: 'Только невыполненные задачи', action: 'onlyUncompleted' },
];

export const DropdownMenu = () => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState('Все задачи');

  const handleOptionClick = () => (text, value) => {
    setButtonText(text);
    dispatch(setShownTasks(value));
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        {buttonText}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {dropdownMenuItems.map(({ title, action }, index) => (
          <Dropdown.Item key={index} onClick={handleOptionClick(title, action)}>
            {title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
