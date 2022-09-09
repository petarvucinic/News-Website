import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import axios from "axios";
import React from "react";
import Cards from "./components/Cards/Cards";
import Search from "./components/Search/Search";
import { API_KEY } from "./components/constants";
import Articles from "./components/ExpandViewNews/Articles";
import ExpandView from "./components/ExpandViewNews";

export const HandlingContext = React.createContext();

function App() {
  const [sortby, setSortby] = useState("");
  const [searchInput, setSerachInput] = useState("a");
  const [news, setNews] = useState([]);
  const [fetchNumber, setFetchNumber] = useState(20);
  const [datePicker, setDatePicker] = useState(null);

  const handleClickSearch = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchInput}&from=${datePicker}&pageSize=${fetchNumber}&sortBy=${sortby}&apiKey=${API_KEY}`
      )
      .then((res) => {
        setNews(res.data.articles);
        // setNews([...news, ...res.data.articles]);
      })
      .catch((error) => console.log(error));
  };

  console.log(datePicker)

  return (
    <HandlingContext.Provider
      value={{
        sortby,
        setSortby,
        searchInput,
        setSerachInput,
        handleClickSearch,
        news,
        setNews,
        fetchNumber,
        setFetchNumber,
        setDatePicker,
      }}
    >
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search /> <Cards />
            </>
          }
        ></Route>

        <Route path="expand" element={<ExpandView />}>
          <Route index element={<Articles />} />
        </Route>
      </Routes>
    </HandlingContext.Provider>
  );
}

export default App;
