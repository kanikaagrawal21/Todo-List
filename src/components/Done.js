import React, { useContext } from 'react';
import ListContext from '../store/list-context';

import TodoCard from './TodoCard';
import DeleteDone from './DeleteDone';

import classes from './Todo.module.css';


function Done() {

    const Ctx = useContext(ListContext);

    const taskStatusChangeHandler = (id) => {
        Ctx.todo(id);
    }

    const arr = Ctx.items.map(
        item => {
            if (item.taskStatus === true){
                return <TodoCard key={item.id} data={item} taskStatusChange={taskStatusChangeHandler}/>
            }
            return null;
        }
    )

    return (
      <div className={classes.main}>
          {arr}
          <DeleteDone />
      </div>
    )
}

export default Done;