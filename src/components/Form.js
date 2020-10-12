import React from 'react';

const Form = ({getFact, changeCategory, categories}) => <form onSubmit={getFact}>
    <select name="category" id="category" onChange={changeCategory}>
    {
        categories.map(cat => <option key={cat} value={cat}>{cat}</option>)
    }
    </select>
    <input type="submit" value="Get fact" id="fact-button"/>
</form>

export default Form;