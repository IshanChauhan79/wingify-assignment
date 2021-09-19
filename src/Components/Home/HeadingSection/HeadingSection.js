import React from "react";
import classes from "./HeadingSection.module.css";
import headingBackground from "../../../assets/images/headingBackground.jpg";

function HeadingSection() {
  return (
    <div className={classes.HeadingSection}>
      <img src={headingBackground} alt="" />
      <div className={classes.Details}>
        <h1 className={classes.Heading}>Sample Heading</h1>
        <div className={classes.HeadingDescription}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          distinctio incidunt quae voluptas tempore dolorem, autem officia
          libero soluta.
        </div>
      </div>
    </div>
  );
}

export default HeadingSection;
