import React, { useState, useEffect } from 'react';
import {
  useLoadScript,
} from "@react-google-maps/api"
//import useSearchYelp from './yelp-api/useSearchYelp';
import * as api from "./yelp-api/api"
import './App.css';
import { Search } from './components/search';
import ResultList from './components/ResultList';



const libraries = ["places"];
const searchParams = {
  term:"Bar",
  longitude:-0.1275862,
  latitude:51.5072178,
  limit:50,
}
function App() {
  const {isLoaded,loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries:libraries
  })
  const [searchVal, setSearchVal] = useState("")
  //const [businesses,amountResults,searchParams,setSearchParams] = useSearchYelp("","London")
  
  function handleSearch(e){
    e.preventDefault();
    const fetchDataFirstTime = async ()=>{
      try{
        const rawData = await api.get("/businesses/search",searchParams)
        const res = await rawData.json()
        console.log("res",res)
        // setBusinesses(res.businesses)
        // setAmount(res.total)
      }
      catch(e){
        console.error(e)
      }
    }
    fetchDataFirstTime();
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
            <button onClick={e=>handleSearch(e)}>SearcH?</button> 
          </form>
        </div>
      </section>
      <div className='Result'>
        <ResultList />
      </div>
    </body>
    </>
  );
}

export default App;
