import { Grid } from "@mantine/core";
import React, { useContext, useEffect } from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { API_KEY } from "../constants";
// import axios from "axios";
import NewsCard from "./NewsCard";
import ButtonUI from "../UI/ButtonUI";
import { HandlingContext } from "../../App";

const Cards = () => {
  const { news, setFetchNumber, handleClickSearch } =
    useContext(HandlingContext);

  const moreNews = () => {
    setFetchNumber((prevState) => prevState + 1);
    handleClickSearch();
  };

  useEffect(() => handleClickSearch(), []);

  return (
    <>
      <Grid sx={{ padding: "40px" }}>
        {news.map((card, index) => {
          return (
            <Grid.Col key={index} md={6} lg={3}>
              <NewsCard data={card} />
            </Grid.Col>
          );
        })}
      </Grid>
      {news.length !== 0 ? (
        <ButtonUI onClick={moreNews} placeholder="LOAD MORE" />
      ) : (
        ""
      )}
    </>
  );
};

export default Cards;
