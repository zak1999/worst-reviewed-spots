import React from 'react';
import { Combobox, ComboboxInput, ComboboxOption, ComboboxPopover } from '@reach/combobox';
import usePlacesAutocomplete, {
  getGeocode,
  getLating
} from 'use-places-autocomplete'; 
import "@reach/combobox/styles.css"

export function Search(){
  const {
    ready, 
    value, 
    suggestions:{status,data},
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions:{
      location:{ lat:()=>51.5072, lng:()=>-0.1276},
      radius:200*1000
    }
  })
  return(
  <Combobox onSelect={(address)=>{
    setValue(address,false);
    clearSuggestions();
    console.log(address)
    try{
      // what to do after the location has been selected
    }
    catch(error){
      console.log(Error)
    }
  }}
  >
    <ComboboxInput 
      value={value} 
      onChange={(e)=>{setValue(e.target.value)}}
      disabled={!ready}
      placeholder="enter Address"/>
    <ComboboxPopover>
      {status==="OK" && data.map(({id,description})=>(
      <ComboboxOption 
        key={id}
        value={description}/>))}
    </ComboboxPopover>
  </Combobox>
  )
  
}
