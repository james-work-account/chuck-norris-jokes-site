import React from 'react';
import JokeStates from '../utils/JokeStates'

const Favourite = ({toggleFavourite, jokeState}) => {
    const style = jokeState === JokeStates.Favourite
        ? " added"
        : jokeState === JokeStates.RemoveFavouriteAreYouSure
        ? " are-you-sure"
        : ""
    return(
        <button className={`favourite${style}`} onClick={toggleFavourite}>
            <span><i className="fas fa-star"></i></span>
            <span className="text">
                {jokeState === JokeStates.Favourite ? "Remove from Favourites" : ""}
                {jokeState === JokeStates.RemoveFavouriteAreYouSure ? "Are you sure?" : ""}
                {jokeState === JokeStates.NotFavourite ? "Add to Favourites" : ""}
            </span>
        </button>
    )
}

export default Favourite;