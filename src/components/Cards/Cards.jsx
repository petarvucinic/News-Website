import { Grid } from "@mantine/core";
import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API_KEY } from "../constants";
import axios from "axios";
import NewsCard from "./NewsCard";
import ButtonUI from "../UI/ButtonUI";
import { HandlingContext } from "../../App";

const Cards = () => {
  const { sortby, searchInput } = useContext(HandlingContext);
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${searchInput}&from=2022-08-03&pageSize=20&sortBy=${sortby}&apiKey=${API_KEY}`
      )
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((error) => console.log(error));
  }, [sortby, searchInput]);

  return (
    <>
      <Grid sx={{ padding: "40px" }}>
        {news.map((card) => {
          return (
            <Grid.Col md={6} lg={3}>
              <NewsCard data={card} />
            </Grid.Col>
          );
        })}
      </Grid>
      {searchInput !== "" && <ButtonUI placeholder="LOAD MORE" />}
    </>
  );
};

export default Cards;
