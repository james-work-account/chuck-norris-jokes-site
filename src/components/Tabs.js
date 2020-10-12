import React from 'react';

const Tabs = ({tab, setTab}) => <div>
    <h2>Choose a search method:</h2>
    <nav>
        <ul>
            <li className={tab === "random" ? "active" : ""}><button onClick={() => setTab("random")}>Random</button></li>
            <li className={tab === "category" ? "active" : ""}><button onClick={() => setTab("category")}>Category</button></li>
            <li className={tab === "query" ? "active" : ""}><button onClick={() => setTab("query")}>Free search</button></li>
        </ul>
    </nav>
</div>

export default Tabs;