import React from 'react';
import Twitter from './Twitter';

const Joke = ({joke}) => <div className="joke">
    <p>{joke}</p>
    <Twitter joke={joke}/>
</div>

export default Joke;