import React ,{useEffect,useState} from 'react'
import Recipe from './Recipe'
import './App.css';
import { getSuggestedQuery } from '@testing-library/dom';

const App =()=>{
  const APP_ID='a21753ae'; 
  const APP_KEY=
'352167e3040a180001a3987677135c41';
const[recipe,setRecipe]=useState([]);
const[search,setSearch]=useState('');
const[query,setQuery]=useState('chicken');
 useEffect(()=>{
getRecipes()
 },[query]);


 const getRecipes = async () =>{
   const response= await fetch(` https://api.edamam.com/search?q=${query}&app_id=${ APP_ID }&app_key=${APP_KEY} `);
   const data= await response.json();
   console.log(data);
   setRecipe(data.hits);
   console.log(data.hits);
   
 };
 const updateSearch=(e)=>{
   setSearch(e.target.value);
 }

 const getSearch =(e)=>{
   e.preventDefault();
   setQuery(search);
   setSearch("");
 } 
  return (
    <div className="App">
    <form onSubmit={getSearch} className="search-form">
  <input className='search-bar' type="text" name="name" value={search} onChange={updateSearch}/>

  <button type="submit" className='search-button'>search</button>
    
  </form>
  <div className="recipe">
{recipe.map(recipe=>(
  <Recipe key={ recipe.recipe.label} title={recipe.recipe.label}
  calories={recipe.recipe.calories}
    img={recipe.recipe.image}
    ingredients={recipe.recipe.ingredients}
  />
))}
 </div>
  </div>
    
  );
} 

 

export default App;
