import React, { useContext } from "react";

import { Input } from "@mantine/core";
import Sortby from "../MultiSelect/Sortby";
import { HandlingContext } from "../../App";
import ButtonUI from "../UI/ButtonUI";

const Search = () => {
  const { setSerachInput, setSortby, sortby } = useContext(HandlingContext);

  const handleSearch = (e) => {
    setSerachInput(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "250px",
        marginTop: "50px",
        justifyContent: "space-around",
      }}
    >
      <Input
        onChange={(e) => handleSearch(e)}
        sx={{ width: "30%" }}
        placeholder="Search news"
      />
      <Sortby sortby={sortby} setSortby={setSortby} />
    </div>
  );
};

export default Search;
