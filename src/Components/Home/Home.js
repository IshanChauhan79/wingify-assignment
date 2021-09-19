import React from "react";
import HeadingSection from "./HeadingSection/HeadingSection";
import classes from "./Home.module.css";

function Home() {
  return (
    <div className={classes.Home}>
      <HeadingSection />
      <div>hello</div>
    </div>
  );
}

export default Home;
