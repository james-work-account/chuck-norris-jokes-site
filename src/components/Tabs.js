import React, { useState } from 'react';

const Tabs = ({tab, setTab}) => {
    const [open, setOpen] = useState(false);

    const toggleTab = (tabName) => {
        setOpen(false);
        setTab(tabName)
    }

    return (<>
        <button className="hamburger" onClick={() => setOpen(!open)}><i className="fas fa-bars"></i></button>
        <nav className={`tabs${open ? " open" : ""}`}>
            <h2>Choose a search method:</h2>
            <ul>
                <li className={`${tab === "favourites" ? "active" : ""} favourites`}><button onClick={() => toggleTab("favourites")}><span><i className="fas fa-star"></i></span><span className="visually-hidden-large">View Favourites</span></button></li>
                <li className={`${tab === "random" ? "active" : ""}`}><button onClick={() => toggleTab("random")}>Random</button></li>
                <li className={`${tab === "category" ? "active" : ""}`}><button onClick={() => toggleTab("category")}>Category</button></li>
                <li className={`${tab === "query" ? "active" : ""}`}><button onClick={() => toggleTab("query")}>Free search</button></li>
            </ul>
        </nav>
    </>)
}

export default Tabs;