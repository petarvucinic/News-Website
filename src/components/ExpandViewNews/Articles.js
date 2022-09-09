import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Image } from "@mantine/core";
import classes from "./Articles.module.css";
import ButtonUI from "../UI/ButtonUI";

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
        <Image src={location.state.image}></Image>
      </div>
      <div className={classes.paragraph}>
        <p>{location.state.description}</p>
      </div>
      <div className={classes.btn}>
        <ButtonUI placeholder="HOME PAGE" onClick={homePageNav} />
      </div>
    </div>
  );
}

export default Articles;
