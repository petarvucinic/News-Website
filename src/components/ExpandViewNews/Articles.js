import React from "react";
import { useLocation } from "react-router-dom";
import { Grid, Image } from "@mantine/core";
import classes from "./Articles.module.css";

function Articles() {
  const location = useLocation();

  return (
    // <Image
    //   src={location.state.image}
    //   height={160}
    //   alt="Norway"
    // />
    // <Grid>
    //   <Grid.Col span={5} style={{  }}>
    //     <Image src={location.state.image} />
    //   </Grid.Col>
    //   <Grid.Col span={3}>{location.state.description}</Grid.Col>
    // </Grid>

    <div className={classes.container}>
      <Image className={classes.images} src={location.state.image}></Image>
    </div>
  );
}

export default Articles;
