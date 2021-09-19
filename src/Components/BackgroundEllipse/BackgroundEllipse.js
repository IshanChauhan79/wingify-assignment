import React from "react";
import classes from "./BackgroundEllipse.module.css";

function BackgroundEllipse() {
  return <div className={classes.BackgroundEllipse}>
      <div className={classes.BackgroundEllipseComponent}></div>
  </div>;
}

export default BackgroundEllipse;
