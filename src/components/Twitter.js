import React from 'react';

const Twitter = ({joke}) => 
    <a href={`https://twitter.com/intent/tweet?text=${joke.value}`}  className="twitter-share-button" target="_blank" rel="noopener noreferrer">
        <span><i className="fab fa-twitter"></i></span>
        <span className="text">Tweet</span>
    </a>

export default Twitter