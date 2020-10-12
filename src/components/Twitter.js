import React from 'react';

const Twitter = ({joke}) => <>
    <a href={`https://twitter.com/intent/tweet?text=${joke}`}  className="twitter-share-button" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
        Tweet
    </a>
</>

export default Twitter