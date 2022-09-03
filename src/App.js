import { useState } from "react";
import React from "react";
import Cards from "./components/Cards/Cards";
import Search from "./components/Search/Search";

export const HandlingContext = React.createContext();

function App() {
  const [sortby, setSortby] = useState(null);
  const [searchInput, setSerachInput] = useState("");

  return (
    <HandlingContext.Provider
      value={{ sortby, setSortby, searchInput, setSerachInput }}
    >
      <Search />
      <Cards />
    </HandlingContext.Provider>
  );
}

export default App;
