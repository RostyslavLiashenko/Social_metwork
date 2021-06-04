import React from "react";
import classes from './NotFound.module.css'

const NotFound = () => {
    return (
        <div className={`${classes.main}`}>
            <div className={`${classes.fof}`}>
                <h1>Error 404</h1>
            </div>
        </div>
    )
}
export default NotFound;