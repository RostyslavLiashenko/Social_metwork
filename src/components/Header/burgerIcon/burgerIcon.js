import React from "react";
import classes from './burgerIcon.module.css';

const BurgerIcon = ({isOpenMenu, burgerClick}) => {
    return (
        <div className={isOpenMenu ? `${classes.container} ${classes.change}` : `${classes.container}`} onClick={burgerClick}>
            <div className={classes.bar1}></div>
            <div className={classes.bar2}></div>
            <div className={classes.bar3}></div>
        </div>
    )
}
export default BurgerIcon