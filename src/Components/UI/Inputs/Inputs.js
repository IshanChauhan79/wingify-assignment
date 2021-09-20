import React from "react";
import classes from "./Inputs.module.css";

function Inputs(props) {
  if (props.type === "text") {
    return (
      <div className={classes.Inputs}>
        <input
          type="text"
          className={[
            classes.InputText,
            props.error ? classes.InputError : null,
          ].join(" ")}
        />
        {props.error ? (
          <div className={classes.InputErrorMessage}>
            Please add valid email address
          </div>
        ) : null}
      </div>
    );
  }
  if (props.type === "number");
  return (
    <div className={classes.Inputs}>
      <input
        type="number"
        min={props.min}
        max={props.max}
        className={[
          classes.InputText,
          props.error ? classes.InputError : null,
        ].join(" ")}
      />
    </div>
  );
}

export default Inputs;
