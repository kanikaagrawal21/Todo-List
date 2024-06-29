import React from 'react';

import classes from './TodoCard.module.css';

function TodoCard(props) {
    const todoOnClickHandler = () => {
        props.taskStatusChange(props.data.id);
    }

    
  return (
    <div className={classes.card} onClick={todoOnClickHandler}>
        
        <input type='checkbox' checked={props.data.taskStatus} readOnly></input>
        <p>{props.data.task}</p>
        
    </div>
  )
}

export default TodoCard;