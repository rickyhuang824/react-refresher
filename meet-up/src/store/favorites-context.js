import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (meetUp) => {},
    removeFavorite: (meetUpId) => {},
    isFavorite: (meetUpId) => {},
});

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavoriteHandler = (meetUp) => {
        setFavorites((prev) => [...prev, meetUp]);
    };
    const removeFavoriteHandler = (meetupId) => {
        setFavorites((prev) => prev.filter((meetUp) => meetUp.id !== meetupId));
    };

    const itemIsFavorite = (meetupId) => {
        return favorites.some((meetup) => meetup.id === meetupId);
    };

    const context = {
        favorites,
        totalFavorites: favorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: itemIsFavorite,
    };
    return (
        <FavoritesContext.Provider value={context}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContext;
