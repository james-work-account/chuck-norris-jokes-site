import React from 'react';

const QueryForm = ({getJokes, setQuery, query}) => <form onSubmit={getJokes}>
    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search for jokes" minLength="3" maxLength="120" required/>
    <input type="submit" value="Get joke" id="joke-button"/>
</form>

export default QueryForm;