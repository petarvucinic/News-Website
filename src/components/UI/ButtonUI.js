import React from "react";
import { Button } from "@mantine/core";

const ButtonUI = (props) => {
  return (
    <div
      style={{
        marginTop: "70px",
        marginBottom: "70px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button>{props.placeholder}</Button>
    </div>
  );
};

export default ButtonUI;
