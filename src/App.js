import React, { useState } from 'react';
import {
  useLoadScript,
} from "@react-google-maps/api"
//import useSearchYelp from './yelp-api/useSearchYelp';
import * as api from "./yelp-api/api"
import './App.css';
import { Search } from './components/Search';
import Loader from './components/loader/Loader';
import Result from './components/result/Result';




function App() {
  const {isLoaded,loadError} = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    libraries:["places"]
  })
  const [searchTerm, setSearchTerm] = useState("Barbershop");
  const [searchLocation, setSearchLocation] = useState("");
  const [last1,setLast1] = useState(undefined);
  const [loading,setLoading] = useState(false);

  const collectBottomOneId = async (total) => {
    console.log("total",total)
    var offsetNum = 0
    if (10 < total && total < 1000) {// checks if there if the total needs to be offsetted or not
      offsetNum = (total - 10)
    }else if (total > 1000){// the max the API can take is limit+offset =1000
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

  const flow = async () =>{
    const res = await fetchBusinessTotal();
    const last1 = await collectBottomOneId(res);
    await setLast1(last1);
    setLoading(false);
  }
  
  function handleSearch(e){
    e.preventDefault();
    setLoading(true);
    setLast1(undefined);
    if (searchLocation===""){
      console.log("something went wrong")//pormpt user to look up a location
      return // exit the function
    }    
    flow();
    console.log(last1)
  }

  if (loadError) return "Error loading maps";
  if (!isLoaded) return "Loading Maps";

  return (
    <>
   
    <body>
      <section className="hero">
        <div className='hero-card'>
          <div className='hero-text'>
            <h1>Find the worst rated places near you...</h1>
            <h3>(according to yelp)*</h3>
          </div>

          <form className='search-form'>
            <input className="searchbar" id="term" type="text" autoComplete="off" placeholder="Cafe, Barbershop, Pub, etc."  onChange={e=>setSearchTerm(e.target.value)}></input>
            <Search className="searchbar" id ="location" setSearchLocation={setSearchLocation}/>
            <button onClick={e=>handleSearch(e)}>Search...</button>
          </form>
        </div>
        <div>
        </div>
      </section>
      <div className='target'>
        {loading && <> 
          <div >
          <Loader className="loader"/>
          </div>
        </>} 
        {last1 &&
        <div>
        <Result result={last1}/>
        </div>}
        </div>
      <footer className="main-footer">
		<div className="footer-inner">
			<span>*The Yelp API limits itself to 1000 results, so although
         the program looks to get the last business in the returned request
        (which is ordered by "rating" accorrding to Yelp), the "worst" place may be pretty good!</span>
		</div>
    <div className="footer-inner">
			<span>
        <ul className='socials'>
          <li><a href='https://www.linkedin.com/in/zakariyya-ahmed/'>LinkedIn</a></li>
          <li><a href='https://github.com/zak1999'>GitHub</a></li>
        </ul>
      </span>
		</div>
	</footer>
    </body>
    </>
  );
}

export default App;
