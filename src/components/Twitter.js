import React from 'react';

const Twitter = ({fact}) => <>
    <a href={`https://twitter.com/intent/tweet?text=${fact}`}  className="twitter-share-button" target="_blank" rel="noopener noreferrer">
        <i className="fab fa-twitter"></i>
        Tweet
    </a>
</>

export default Twitter