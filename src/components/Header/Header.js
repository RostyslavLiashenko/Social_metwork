import React from 'react';
import classes from './Header.module.css';
import {Link} from "react-router-dom";
import Preloader from "../Common/Preloader/Preloader";
import logoPhoto from '../../assets/logo2.png'

const Header = (props) => {
    return (
        <header className={classes.header}>
            <Link to='/profile'>
            <img
                src={logoPhoto}
                alt="logo"
                width="140px"
                />
            </Link>
                <div className={classes.loginBlock}>
                    {props.isFetching ? <Preloader /> : ''}
                    {props.isAuth ? <div className={classes.authBlock}>
                        <div className={classes.name}>
                            {props.login}
                        </div>
                        <div className={classes.buttons}>
                            <div className={classes.container}>
                                <button className={`${classes.btn} ${classes.effect01}`} onClick={props.logout}><span>log out</span></button>
                            </div>
                        </div>
                        </div> :
                        <Link className={`${classes.btnLogin} ${classes.effect01}`} to='/login'><span>login</span></Link>
                    }
                </div>
        </header>
    )
}

export default Header;