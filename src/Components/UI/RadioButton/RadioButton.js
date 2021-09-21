import React from "react";
import classes from "./RadioButton.module.css";

// return UI for radio button,receive items in props
function RadioButton(props) {
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
