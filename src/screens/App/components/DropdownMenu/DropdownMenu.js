import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShownTasks } from '../../../../store/main/main.actions';

export const DropdownMenu = () => {
  const dispatch = useDispatch();
  const [buttonText, setButtonText] = useState('Все задачи');

  const handleOptionClick = () => (text, value) => {
    setButtonText(text);
    dispatch(setShownTasks(value));
  };

  const dropdownMenuItems = [
    { title: 'Все задачи', action: 'showAll' },
    { title: 'Только выполненные задачи', action: 'onlyCompleted' },
    { title: 'Только невыполненные задачи', action: 'onlyUncompleted' },
  ];

  return (
    <Dropdown>
      <Dropdown.Toggle variant='success' id='dropdown-basic'>
        {buttonText}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {dropdownMenuItems.map(item => (
          <Dropdown.Item onClick={handleOptionClick(item.title, item.action)}>
            {item.title}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};
