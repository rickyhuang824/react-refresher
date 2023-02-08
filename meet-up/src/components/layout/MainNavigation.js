import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meet Ups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meet Ups</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Favorites</Link>
                    </li>
                    <li>
                        <Link to="/new-meet-up">New Meet Ups</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainNavigation;
