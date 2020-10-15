import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import CategoryForm from './components/forms/CategoryForm';
import QueryForm from './components/forms/QueryForm';
import BasicForm from './components/forms/BasicForm';
import Tabs from './components/Tabs';
import JokeStates from './utils/JokeStates'
import Jokes from './components/Jokes';

function App() {
  const [jokes, setJokes] = useState([])
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])
  const [query, setQuery] = useState("")
  const [tab, setTab] = useState("random")
  const [favourites, setFavourites] = useState(localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites")) : [])

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
        setJokes([{...json, jokeState: favourites.map(j => j.id).includes(json.id) ? JokeStates.Favourite : JokeStates.NotFavourite}])
      })
    }
    if(tab === "category") {
      url = baseUrl + `random${category === "" ? "" : `?category=${category}`}`;
      fetch(url)
      .then(res => res.json())
      .then(json => {
        setJokes([{...json, jokeState: favourites.map(j => j.id).includes(json.id) ? JokeStates.Favourite : JokeStates.NotFavourite}])
      })
    }
    if(tab === "query") {
      url = baseUrl + `search?query=${query}`;
      fetch(url)
      .then(res => res.json())
      .then(res => {
        if(res.result.length === 0) setJokes([{id: "1", "value": "Chuck Norris doesn't find your search query very funny.", jokeState: favourites.filter(joke => joke.id === "1").length > 0 ? JokeStates.Favourite : JokeStates.NotFavourite}]);
        else setJokes(res.result.map(joke => {
          return {...joke, jokeState: favourites.map(j => j.id).includes(joke.id) ? JokeStates.Favourite : JokeStates.NotFavourite}
        }));
      })
    }
  }

  const changeCategory = e => setCategory(e.target.value);

  const toggleFavourite = joke => {
    const newFavourites = favourites.map(j => j.id).includes(joke.id) ? favourites.filter(i => i.id !== joke.id) : [...favourites, joke];
    localStorage.setItem("favourites", JSON.stringify(newFavourites))
    setFavourites(newFavourites)
  }

  useEffect(() => {
    localStorage.removeItem("favourites")
    localStorage.setItem("favourites", JSON.stringify(favourites))
  }, [favourites])

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
            <CategoryForm getJokes={getJokes} category={category} changeCategory={changeCategory} categories={categories} />
        }
        {
          tab === "query" &&
            <QueryForm getJokes={getJokes} setQuery={setQuery} query={query} />
        }
        <div className="jokes">
          {
            tab === "favourites"
              ? <Jokes jokes={favourites} toggleFavourite={toggleFavourite} favourites={favourites} />
              : <Jokes jokes={jokes} toggleFavourite={toggleFavourite} favourites={favourites} />
          }
        </div>
      </main>
    </div>
  );
}

export default App;
