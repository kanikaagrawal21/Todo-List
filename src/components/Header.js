import React from 'react';

import classes from './Header.module.css';

function Header() {
  return (
    <div className={classes.header}>ToDo-List</div>
  )
}

export default React.memo(Header);