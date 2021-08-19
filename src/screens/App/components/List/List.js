import React from 'react';
import { Task } from '../Task/Task';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { ListWrapper } from './styled';
import { useSelector } from 'react-redux';
import { getShownTasks } from '../../../../store/main/main.selectors';

export const List = () => {
  const tasks = useSelector(state => getShownTasks(state));

  return (
    <ListWrapper>
      <ListGroup>
        {tasks.map(task => {
          return (
            <ListGroupItem key={task.id}>
              <Task
                id={task.id}
                content={task.content}
                isChecked={task.isChecked}
              />
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </ListWrapper>
  );
};
