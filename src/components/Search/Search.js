import React, { useContext } from "react";

import { Input } from "@mantine/core";
import Sortby from "../MultiSelect/Sortby";
import { HandlingContext } from "../../App";
import ButtonUI from "../UI/ButtonUI";
const Search = () => {
  const { setSerachInput, setSortby, sortby, handleClickSearch } =
    useContext(HandlingContext);

  const handleSearch = (e) => {
    setSerachInput(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        minHeight: "250px",
        marginTop: "5%",
        justifyContent: "space-evenly",
      }}
    >
      <div style={{ display: "flex", width: "70%", marginLeft: "150px" }}>
        <Input
          onChange={(e) => handleSearch(e)}
          sx={{ width: "30%" }}
          placeholder="Search news"
        />
        <ButtonUI onClick={handleClickSearch} placeholder="Search" />
      </div>
      <div style={{ marginRight: "50px" }}>
        <Sortby sortby={sortby} setSortby={setSortby} />
      </div>
    </div>
  );
};

export default Search;
