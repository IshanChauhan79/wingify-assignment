import React from "react";
import classes from "./BackgroundEllipse.module.css";

function BackgroundEllipse() {
  console.log("hello")
  return <div className={classes.BackgroundEllipse}>
      <div className={classes.BackgroundEllipseComponent}></div>
  </div>;
}

export default BackgroundEllipse;
