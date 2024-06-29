import React, { useState, useRef, useContext } from 'react';

import Todo from './Todo';
import Done from './Done';
import ListContext from '../store/list-context';

import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';

import classes from './Body.module.css';
import All from './All';

function Body() {
    const [isInputFocused, setIsInputFocused] = useState(false);
    const [isTodoSelected, setIsTodoSelected] = useState(true);
    const [isDoneSelected, setIsDoneSelected] = useState(false);
    const [isAllSelected, setIsAllSelected] = useState(false);

    const inputTask = useRef('');
    const Ctx = useContext(ListContext);

    const inputOnFocusHandler = () => {
        setIsInputFocused(true);
    }

    const inputOnBlurHandler = () => {
        setIsInputFocused(false);
    }

    const formOnSubmitHandler = (event) => {
        event.preventDefault();
        if (inputTask.current.value.trim().length === 0) return;

        Ctx.addItem(inputTask.current.value);

        inputTask.current.value = '';
    }

    const todoClickHandler = () => {
        if (isTodoSelected) return;
        setIsTodoSelected(true);
        setIsDoneSelected(false);
        setIsAllSelected(false);
    }

    const doneClickHandler = () => {
        if (isDoneSelected) return;
        setIsDoneSelected(true);
        setIsTodoSelected(false);
        setIsAllSelected(false);
    }

    const allClickHandler = () => {
        if (isAllSelected) return;
        setIsAllSelected(true);
        setIsTodoSelected(false);
        setIsDoneSelected(false);
    }

    let todoTasks = 0, doneTasks = 0, allTasks = 0;
    let list = Ctx.items;
    for (let i = 0; i<list.length; i++){
        if (list[i].taskStatus === false) todoTasks++;
        else doneTasks++;
    }

    allTasks = todoTasks+doneTasks;


    const formClass = isInputFocused ? classes.formSelected : classes.form;

    const todoClass = isTodoSelected ? classes.navItemSelected : classes.navItem;
    const doneClass = isDoneSelected ? classes.navItemSelected : classes.navItem;
    const allClass = isAllSelected ? classes.navItemSelected : classes.navItem;

  return (
    <div className={classes.main}>
        <form className={formClass} onSubmit={formOnSubmitHandler}>
            <label>Add Task</label>
            <input id='task' name='task' type='text' ref={inputTask} onFocus={inputOnFocusHandler} onBlur={inputOnBlurHandler}></input>
            <button>CREATE</button>
        </form>

        <div className={classes.navbar}>
            
            <p className={todoClass} onClick={todoClickHandler}>
                <InsertInvitationIcon />
                To Do ({todoTasks})
            </p>
            
            <p className={doneClass} onClick={doneClickHandler}>
                <CheckCircleIcon />
                Done ({doneTasks})
            </p>
            
            <p className={allClass} onClick={allClickHandler}>
                <FormatListBulletedIcon />
                All ({allTasks})
             </p>
            
        </div>

        {isTodoSelected && <Todo />}
        {isDoneSelected && <Done />}
        {isAllSelected && <All />}
        
    </div>
  )
}

export default Body