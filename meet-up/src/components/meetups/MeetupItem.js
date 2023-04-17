import React, { useContext } from "react";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";
import FavoritesContext from "../../store/favorites-context";

const MeetupItem = ({ image, title, address, description, id }) => {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.isFavorite(id);

    const toggleFavoriteHandler = () => {
        if (itemIsFavorite) {
            favoritesCtx.removeFavorite(id);
        } else {
            favoritesCtx.addFavorite({
                id,
                image,
                title,
                address,
                description,
            });
        }
    };
    return (
        <Card>
            <li className={classes.item}>
                <div className={classes.image}>
                    <img src={image} alt="title" />
                </div>
                <div className={classes.content}>
                    <h3>{title}</h3>
                    <address>{address}</address>
                    <p>{description}</p>
                </div>
                <div className={classes.actions}>
                    <button onClick={toggleFavoriteHandler}>
                        {itemIsFavorite
                            ? "Remove from favorite"
                            : "Add to favorite"}
                    </button>
                </div>
            </li>
        </Card>
    );
};

export default MeetupItem;
