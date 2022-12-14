import React from "react";
import { Button } from "@mantine/core";

const ButtonUI = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Button onClick={props.onClick}>{props.placeholder}</Button>
    </div>
  );
};

export default ButtonUI;
