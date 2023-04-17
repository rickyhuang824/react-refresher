import React, { useContext } from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavoritesContext from "../../store/favorites-context";

const MainNavigation = () => {
    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>React Meet Ups</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">All Meet Ups</Link>
                    </li>
                    <li>
                        <Link to="/favorites">
                            Favorites{" "}
                            <span className={classes.badge}>
                                {favoritesCtx.totalFavorites}
                            </span>
                        </Link>
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
