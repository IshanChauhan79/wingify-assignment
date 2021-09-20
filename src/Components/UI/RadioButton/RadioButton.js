import React from "react";
import classes from "./RadioButton.module.css";

function RadioButton(props) {
  console.log("radio");
  return (
    <div className={classes.RadioButton}>
      {props.buttonList.map((item, i) => [
        <input
          type="radio"
          id={item}
          name={props.name}
          value={item}
          defaultChecked={i === 0}
          key={item}
          onChange={props.change}
        />,
        <label htmlFor={item} key={item + i}>
          {item}
        </label>,
      ])}
    </div>
  );
}

export default RadioButton;
