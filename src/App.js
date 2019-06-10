import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './recipe';

const App = () => {
  const APP_ID = 'a64789d9';
  const APP_KEY = '9ca8e1c55c0d643c52a9c69903c575b4	';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  };

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };

  return (
    <div className='App'>
      <h1 className='title'>What do you want to eat!?</h1>
      <p className='pHeader'>Enter a main dish to get recipe ideas.</p>
      <form onSubmit={getSearch} className='search-form'>
        <input
          className='search-bar'
          type='text'
          value={search}
          onChange={updateSearch}
          placeholder='Type in main ingredient'
        />
        <button className='search-button' type='submit'>
          Search
        </button>
      </form>

      <div className='recipesBG'>
        <div className='recipeInner'>
          {recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.id}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
