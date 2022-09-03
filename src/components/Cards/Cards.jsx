import { Grid } from "@mantine/core";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { API_KEY } from "../constants";
import axios from "axios";
import NewsCard from "./NewsCard";

const Cards = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=tesla&from=2022-08-03&sortBy=publishedAt&apiKey=${API_KEY}`
      )
      .then((res) => {
        setNews(res.data.articles);
      })
      .catch((error) => console.log(error));
  }, []);

  let helper = [];
  for(let i=0; i<21; i++){
    helper.push(news[i])
  }
  return (
    <Grid>
      {news.map((card) => {
        return (
          <Grid.Col md={6} lg={3}>
            <NewsCard data={card} />
          </Grid.Col>
        );
      })}
    </Grid>
  );
};

export default Cards;
