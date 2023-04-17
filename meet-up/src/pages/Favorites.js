import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavoritesPage = () => {
    const favoritesCtx = useContext(FavoritesContext);
    let content;

    if (favoritesCtx.totalFavorites === 0) {
        content = <p>There is no favorite posts</p>;
    } else {
        content = <MeetupList meetups={favoritesCtx.favorites} />;
    }
    return <div>{content}</div>;
};

export default FavoritesPage;
