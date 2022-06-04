import React, { useState, useEffect } from 'react';
import {
  useLoadScript,
} from "@react-google-maps/api"


import './App.css';
import { Search } from './components/search';



const libraries = ["places"];

function App() {
  const {isLoaded,loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries:libraries
  })
  const [searchVal, setSearchVal] = useState("")
  
  
  
  function handleClick(e){
    e.preventDefault();
    console.log(searchVal);
  }

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps"
  
  return (
    <>
    <body className='App'>
      <section id="hero">
        <div className='container'>
          <div className='hero-text'>
            <h1>Find the worst rated places near you...</h1>
            <h2>Lorem </h2>
          </div>
          <form>
            <input type={"text"} placeholder="Temporary SearchBar" id="autocomplete" onChange={e=>setSearchVal(e.target.value)}></input>
            <Search/>
            <button onClick={e=>handleClick(e)}>SearcH?</button> 
          </form>
        </div>
      </section>
    </body>
    </>
  );
}

export default App;
