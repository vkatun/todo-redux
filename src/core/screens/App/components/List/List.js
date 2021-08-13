import React from 'react';
import { Task } from '../Task/Task';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import { ListWrapper } from './styled';
import { useSelector } from 'react-redux'
import { useEffect } from 'react';


export const List = () => {
  
  const tasks = useSelector(store => store.main.tasks);
  
  return (
    <ListWrapper>
      <ListGroup>
        {tasks.map(task => {
          return (
            <ListGroupItem>
              <Task
                key={task.id}
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
