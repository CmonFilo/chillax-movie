import React, { createContext, useContext, useReducer } from "react";

const initialState = {
  favoriteMovies: [],
  favoriteTVShows: [],
};

const GlobalContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE_MOVIE":
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload],
      };
    case "REMOVE_FAVORITE_MOVIE":
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    case "ADD_FAVORITE_TVSHOW":
      return {
        ...state,
        favoriteTVShows: [...state.favoriteTVShows, action.payload],
      };
    case "REMOVE_FAVORITE_TVSHOW":
      return {
        ...state,
        favoriteTVShows: state.favoriteTVShows.filter(
          (tvShow) => tvShow.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};

export { GlobalProvider, useGlobalContext };
