import React from 'react';
import Joke from './Joke';

const Jokes = ({jokes, toggleFavourite, favourites}) => jokes.map(joke =>
  <Joke key={joke.id} joke={joke} toggleFavourite={toggleFavourite} favourites={favourites} />
)

export default Jokes;