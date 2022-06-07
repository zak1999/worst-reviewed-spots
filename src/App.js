import React, { useState, useEffect } from 'react';
import {
  useLoadScript,
} from "@react-google-maps/api"
//import useSearchYelp from './yelp-api/useSearchYelp';
import * as api from "./yelp-api/api"
import './App.css';
import { Search } from './components/search';

function App() {
  const {isLoaded,loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries:["places"]
  })
  const [searchTerm, setSearchTerm] = useState("Barbershop");
  const [searchLocation, setSearchLocation] = useState("");
  const [last1,setLast1] = useState(undefined);
  const [loading,setLoading] = useState(false);

  const collectBottomOne = async (total) => {
    console.log("total",total)
    var offsetNum = 0
    if (10 < total > 1000) {// checks if there if the total needs to be offsetted or not
      offsetNum = (total - 10)
    }else if (total > 1000){// the max the API can take is limit+offset
      offsetNum = 900
    }
    const searchParams = {
      term:searchTerm,
      longitude:searchLocation.lng,
      latitude:searchLocation.lat,
      limit:10,
      offset:offsetNum,
      sort_by:"rating",
    }
    console.log(searchParams)
    
    try{
      const rawData = await api.get("/businesses/search",searchParams)
      const res = await rawData.json()
      const businesses = res.businesses
      const lastOne = res.businesses[businesses.length-1]
      console.log("last one", lastOne)
      return lastOne
    }
    catch(e){
      console.error(e)
    }
  }

  const fetchBusinessTotal = async ()=> {
    const searchParams = {
      term:searchTerm,
      longitude:searchLocation.lng,
      latitude:searchLocation.lat,
      limit:1, // only one as the only the number of results is important in this fetch.
      sort_by:"rating",
    }
    try{
      const rawData = await api.get("/businesses/search",searchParams)
      const res = await rawData.json()
      const total = res.total
      console.log("total", total)
      return total
    }
    catch(e){
      console.error(e)
    }
  }



  function handleSearch(e){
    e.preventDefault();
    setLoading(true);
    setLast1(undefined);
    if (searchLocation===""){
      console.log("something went wrong")//pormpt user to look up a location
      return // exit the function
    }    
    const flow = async () =>{
      const res = await fetchBusinessTotal();
      const last1 = await collectBottomOne(res);
      await setLast1(last1);
      setLoading(false);
    }
    flow()
    console.log(last1)
  }

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

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
            <input type={"text"} placeholder="Temporary SearchBar" id="autocomplete" onChange={e=>setSearchTerm(e.target.value)}></input>
            <Search setSearchLocation={setSearchLocation}/>
            <button onClick={e=>handleSearch(e)}>SearcH?</button> 

          </form>
        </div>
      </section>
      <div className='Result'>
        {loading && <p>LOADING....</p>}
        {last1 && <p>found</p>}
      </div>
    </body>
    </>
  );
}

export default App;
