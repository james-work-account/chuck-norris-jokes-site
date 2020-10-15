import React from 'react';

const CategoryForm = ({getJokes, category, changeCategory, categories}) => <form onSubmit={getJokes}>
    <select name="category" id="category" onChange={changeCategory} placeholder="Select a Category..." required>
        <option value="" disabled >Select a Category</option>
        {
            categories.map(cat => <option key={cat} value={cat} defaultValue={cat === category}>{cat}</option>)
        }
    </select>
    <input type="submit" value="Get joke" id="joke-button"/>
</form>

export default CategoryForm;