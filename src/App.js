import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CategoryForm from './components/forms/CategoryForm';
import QueryForm from './components/forms/QueryForm';
import BasicForm from './components/forms/BasicForm';
import Tabs from './components/Tabs';
import Joke from './components/Joke';

function App() {
  const [jokes, setJokes] = useState([])
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])
  const [query, setQuery] = useState("")
  const [tab, setTab] = useState("random")

  useEffect(() => {
    const url = "https://api.chucknorris.io/jokes/categories"
    fetch(url)
      .then(res => res.json())
      .then(json => setCategories([...json]))
  }, [])

  const getJokes = (e) => {
    e.preventDefault()
    const baseUrl = "https://api.chucknorris.io/jokes/"
    let url = ""
    if(tab === "random") {
      url = `${baseUrl}random`;
      fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setJokes([json.value])
      })
    }
    if(tab === "category") {
      url = baseUrl + `random${category === "" ? "" : `?category=${category}`}`;
      fetch(url)
      .then(res => res.json())
      .then(json => {
        console.log(json)
        setJokes([json.value])
      })
    }
    if(tab === "query") {
      url = baseUrl + `search?query=${query}`;
      fetch(url)
      .then(res => res.json())
      .then(res => {
        console.log(res)
        setJokes(res.result.map(json => json.value))
      })
    }
  }

  const changeCategory = e => setCategory(e.target.value)

  return (
    <div className="App">
      <Header />
      <main>
        <Tabs tab={tab} setTab={setTab} />
        {
          tab === "random" &&
            <BasicForm getJokes={getJokes} />
        }
        {
          tab === "category" && categories.length > 0 &&
            <CategoryForm getJokes={getJokes} changeCategory={changeCategory} categories={categories} />
        }
        {
          tab === "query" &&
            <QueryForm getJokes={getJokes} setQuery={setQuery} query={query} />
        }
        {
          jokes.map((joke, i) =>
            <Joke key={i} joke={joke} />
          )
        }
      </main>
    </div>
  );
}

export default App;
