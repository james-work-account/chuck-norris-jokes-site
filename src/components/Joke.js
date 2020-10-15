import React, { useState } from 'react';
import Twitter from './Twitter';
import Favourite from './Favourite';
import JokeStates from '../utils/JokeStates'


const Joke = ({joke, toggleFavourite, favourites}) => {

    const isFavourite = favourites.map(j => j.id).includes(joke.id)

    const [jokeState, setJokeState] = useState(JokeStates.NotFavourite)

    if(isFavourite && (jokeState !== JokeStates.RemoveFavouriteAreYouSure) && (jokeState !== JokeStates.Favourite)) setJokeState(JokeStates.Favourite)
    if(!isFavourite && (jokeState !== JokeStates.NotFavourite)) setJokeState(JokeStates.NotFavourite)

    const toggleFavouriteAndJokeState = () => {
        if(jokeState === JokeStates.Favourite) {
            setJokeState(JokeStates.RemoveFavouriteAreYouSure)
            setTimeout(() => setJokeState(JokeStates.Favourite), 3000)
        } else {
            toggleFavourite(joke)
        }
    }

    return (
        <div className="joke">
            <p>{joke.value}</p>
            <div className="interact">
                <Twitter joke={joke} />
                <Favourite jokeState={jokeState} toggleFavourite={toggleFavouriteAndJokeState} />
            </div>
        </div>
    )
}

export default Joke;