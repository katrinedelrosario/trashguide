import { useEffect, useState } from "react"

export const useFetch = (url) => {
  const [data, setData] = useState([]) //state for storing fetched data

  useEffect(() => {
    //fetching data from the given url
    fetch(url)
      .then(res => res.json()) //parsing response to json
      .then(data => setData(data)) //updating the state with the fetched data
      .catch(err => console.error(err)) //handles errors in the fetching
  }, []) // epmpty dependency array = this effect will run only once and not repeat on all re-renders

  return data
}
