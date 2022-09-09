import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Image } from "@mantine/core";
import classes from "./Articles.module.css";
import ButtonUI from "../UI/ButtonUI";
import { Card } from "@mantine/core";

function Articles() {
  const location = useLocation();
  const navigate = useNavigate();

  const homePageNav = () => {
    navigate("/");
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>{location.state.title}</h1>
      </div>
      <div className={classes.images}>
        <Card shadow="md" p="lg" radius="md" withBorder>
          <Card.Section>
            <Image src={location.state.image} alt="Norway" />
          </Card.Section>
        </Card>
      </div>
      <div className={classes.paragraph}>
        <p>published date: {location.state.publishedAt}</p>
        <p>{location.state.description}</p>
      </div>
      <div className={classes.btn}>
        <ButtonUI placeholder="HOME PAGE" onClick={homePageNav} />
      </div>
    </div>
  );
}

export default Articles;
