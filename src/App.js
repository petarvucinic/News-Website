import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import Cards from "./components/Cards/Cards";
import Search from "./components/Search/Search";
import { API_KEY } from "./components/constants";

export const HandlingContext = React.createContext();

function App() {
  const [sortby, setSortby] = useState(null);
  const [searchInput, setSerachInput] = useState("");
  const [news, setNews] = useState([]);

  
  const handleClickSearch = () => {
    // useEffect(() => {
      axios
        .get(`https://newsapi.org/v2/everything?q=${searchInput}&from=2022-08-06&pageSize=20&sortBy=${sortby}&apiKey=${API_KEY}`)
        .then((res) => {
          setNews(res.data.articles)
        })
        .catch((error) => console.log(error))
    // }, [searchInput, sortby])
    // console.log(searchInput, sortby)
  };


  return (
    <HandlingContext.Provider
      value={{
        sortby,
        setSortby,
        searchInput,
        setSerachInput,
        handleClickSearch,
        news,
        setNews
      }}
    >
      <Search />
      <Cards />
    </HandlingContext.Provider>
  );
}

export default App;
