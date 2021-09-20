import React from "react";
import classes from "./RadioButton.module.css";

function RadioButton(props) {
  return (
    <div className={classes.RadioButton}>
      {props.buttonList.map((item, i) => [
        <input
          type="radio"
          id={props.name}
          name={props.name}
          value={item}
          defaultChecked={i===0}
          key={item}
        />,
        <span key={item + i}>{item}</span>,
      ])}
    </div>
  );
}

export default RadioButton;
