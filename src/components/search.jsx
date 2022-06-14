import React from 'react';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxPopover,ComboboxList } from '@reach/combobox';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng
} from 'use-places-autocomplete'; 
import "@reach/combobox/styles.css"
// import "./search.css"

export function Search({setSearchLocation}){
  const {
    ready, 
    value, 
    suggestions:{status,data},
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions:{
      location:{ lat:()=>51.5072178, lng:()=>-0.1275862},
      radius:200*1000
    }
  })
  return(
  <Combobox 
  className='combobox'
  onSelect={ 
    async (address)=>{
      setValue(address,false);
      clearSuggestions();
      try{
        const results = await getGeocode({address})
        const {lat, lng} = await getLatLng(results[0]) //only the first result is used
        setSearchLocation({address,lat,lng})
      }
      catch(error){
        setSearchLocation(address)
        console.log(Error)
      }
    }
  }
  >
    <ComboboxInput 
      className='comboinput'
      value={value} 
      onChange={(e)=>{setValue(e.target.value)}}
      disabled={!ready}
      placeholder="Newcastle upon Tyne, UK"/>
    <ComboboxPopover>
      <ComboboxList>
        {status==="OK" && data.map(({id,description})=>(
        <ComboboxOption 
          key={id}
          value={description}/>))}
      </ComboboxList>
    </ComboboxPopover>
  </Combobox>
  )
  
}
