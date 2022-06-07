import queryString from "query-string"

const api_key = process.env.REACT_APP_YELP_API_BEARER_TOKEN
const API_BASE_URL = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3"


export function get(path,queryParams){
  const query = queryString.stringify(queryParams);//converts the params object into a query
  console.log(query)
  // `${API_BASE_URL}${path}?${query}`
  return fetch(`${API_BASE_URL}${path}?${query}`,{
    headers:{
      Authorization:`Bearer ${api_key}`,
      Origin:"localhost",
      withCredentials: true,
    }
  })
}