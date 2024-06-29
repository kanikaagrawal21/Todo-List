import React, { useContext } from 'react';
import Delete from '@mui/icons-material/Delete';

import classes from './DeleteDone.module.css';
import ListContext from '../store/list-context';

function DeleteDone() {
    const Ctx = useContext(ListContext);
    const removeDoneTasksHandler = () => {
        Ctx.clear();
    }

  return (
    <Delete className={classes.button} onClick={removeDoneTasksHandler}/>
  )
}

export default DeleteDone