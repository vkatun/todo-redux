import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setShownTasks } from '../../../../../store/main/main.actions';

export const DropdownMenu = () => {
    const dispatch = useDispatch()
    const [buttonText, setButtonText] = useState('Все задачи')
    const handleOptionClick = (text, value) => {
        setButtonText(text);
        dispatch(setShownTasks(value));
    }   

    return (
    <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
            {buttonText}
        </Dropdown.Toggle>
        <Dropdown.Menu>
            <Dropdown.Item onClick={()=>handleOptionClick('Только выполненные задачи', 'onlyCompleted')}>Только выполненные задачи</Dropdown.Item>
            <Dropdown.Item onClick={()=>handleOptionClick('Только невыполненные задачи', 'onlyUncompleted')}>Только невыполненные задачи</Dropdown.Item>
            <Dropdown.Item onClick={()=>handleOptionClick('Все задачи', 'showAll')}>Все задачи</Dropdown.Item>
        </Dropdown.Menu>
    </Dropdown>
    )
};
