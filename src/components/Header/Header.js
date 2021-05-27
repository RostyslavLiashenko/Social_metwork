import React from 'react';
import classes from './Header.module.css';
import {Link} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";

const Header = (props) => {
    return (
        <header className={classes.header}>
            <img
                src="https://image.flaticon.com/icons/png/128/174/174851.png"
                alt="logo"
                width='60px'/>
                <div className={classes.loginBlock}>
                    {props.isFetching ? <Preloader /> : ''}
                    {props.isAuth ? <div>{props.login} <button onClick={props.logout}>log out</button></div> : <Link to={'/login'}>login</Link>}
                </div>
        </header>
    )
}

export default Header;