import React, { useContext } from 'react'
import ListContext from '../store/list-context';
import TodoCard from './TodoCard';

import classes from './Todo.module.css';

function All() {
    const Ctx = useContext(ListContext);

    const taskStatusChangeHandler = (id) => {
        
    }

    const arr = Ctx.items.map(
        item => <TodoCard key={item.id} data={item} taskStatusChange={taskStatusChangeHandler}/>
    )

    return (
      <div className={classes.main}>
          {arr}
      </div>
    )
}


export default All;