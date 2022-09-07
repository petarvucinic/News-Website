import React from "react";
import { Outlet } from "react-router-dom";

function ExpandView() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ExpandView;
