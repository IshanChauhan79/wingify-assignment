import React from "react";
import CreateAccount from "./CreateAccount/CreateAccount";
import HeadingSection from "./HeadingSection/HeadingSection";
import classes from "./Home.module.css";

// display the card in home page
function Home() {
  return (
    <div className={classes.Home}>
      <HeadingSection />
      <CreateAccount />
    </div>
  );
}

export default Home;
