import React from "react";
import classes from "./BackgroundEllipse.module.css";

// return the code for eliipse shape in background
function BackgroundEllipse() {
  return (
    <div className={classes.BackgroundEllipse}>
      <div className={classes.BackgroundEllipseComponent}></div>
    </div>
  );
}

export default BackgroundEllipse;
