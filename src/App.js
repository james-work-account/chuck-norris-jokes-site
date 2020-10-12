import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Twitter from './components/Twitter';
import Form from './components/Form';

function App() {
  const [fact, setFact] = useState("")
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const url = "https://api.chucknorris.io/jokes/categories"
    fetch(url)
      .then(res => res.json())
      .then(json => setCategories(["", ...json]))
  }, [])

  const getFact = (e) => {
    e.preventDefault()
    const url = `https://api.chucknorris.io/jokes/random${category.length > 0 ? `?category=${category}` : ""}`
    fetch(url)
      .then(res => res.json())
      .then(json => setFact(json.value))
  }

  const changeCategory = e => setCategory(e.target.value)

  return (
    <div className="App">
      <Header />
      <main>
        {
          categories.length > 0 &&
            <Form getFact={getFact} changeCategory={changeCategory} categories={categories} />
        }
        {
          fact.length > 0 && (
            <>
              <p>{fact}</p>
              <Twitter fact={fact}/>
            </>
          )
        }
      </main>
    </div>
  );
}

export default App;
