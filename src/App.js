import React from "react";
import classes from "./App.module.css";
import BackgroundEllipse from "./Components/BackgroundEllipse/BackgroundEllipse";
import Home from "./Components/Home/Home";

function App() {
  return (
    <div className={classes.App}>
      <BackgroundEllipse />
      <Home />
    </div>
  );
}

export default App;
