import React, {useState} from "react";
import classes from './burgerIcon.module.css';

const BurgerIcon = () => {
    const [click, setClick] = useState(false)
    const iconClick = () => {
        setClick(prev => !prev)
    }
    return (
        <div className={click ? `${classes.container} ${classes.change}` : `${classes.container}`} onClick={iconClick}>
            <div className={classes.bar1}></div>
            <div className={classes.bar2}></div>
            <div className={classes.bar3}></div>
        </div>
    )
}
export default BurgerIcon