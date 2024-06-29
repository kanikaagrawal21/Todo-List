import React, { useContext } from 'react';
import ListContext from '../store/list-context';

import TodoCard from './TodoCard';

import classes from './Todo.module.css';

function Todo() {

    const Ctx = useContext(ListContext);

    const taskStatusChangeHandler = (id) => {
      Ctx.done(id);
    }
    
    const arr = Ctx.items.map(
      item => {
        if (item.taskStatus === false){
          return <TodoCard key={item.id} data={item} taskStatusChange={taskStatusChangeHandler}/>
        }

        return null;
      }
    )
    

    return (
      <div className={classes.main}>
          {arr}
      </div>
    )
}

export default Todo;