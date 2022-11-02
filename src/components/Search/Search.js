import React, { useContext } from "react";
import { DatePicker } from "@mantine/dates";
import { Input } from "@mantine/core";
import Sortby from "../MultiSelect/Sortby";
import { HandlingContext } from "../../App";
import ButtonUI from "../UI/ButtonUI";
import classes from "./Search.module.css";
const Search = () => {
  const { setSerachInput, handleClickSearch, setDatePicker } =
    useContext(HandlingContext);

  function convert(str) {
    var date = new Date(str),
      mnth = ("0" + (date.getMonth() + 1)).slice(-2),
      day = ("0" + date.getDate()).slice(-2);
    return [date.getFullYear(), mnth, day].join("-");
  }

  const handleSearch = (e) => {
    setSerachInput(e.target.value);
  };

  const datePickerHandler = (e) => {
    setDatePicker(convert(e));
  };

  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <Input
          onChange={(e) => handleSearch(e)}
          sx={{ width: "50%" }}
          placeholder="Search news"
        />
        <ButtonUI onClick={handleClickSearch} placeholder="Search" />
      </div>

      <div style={{ marginRight: "50px", width: "30%" }}>
        <Sortby />
      </div>
      <div style={{ marginRight: "50px", width: "30%" }}>
        <DatePicker
          onChange={(e) => datePickerHandler(e)}
          placeholder="Pick date"
        ></DatePicker>
      </div>
    </div>
  );
};

export default Search;
