import React, { memo } from "react";
import classes from "./Inputs.module.css";

function Inputs(props) {
  if (props.type === "number") {
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
  return (
    <div className={classes.Inputs}>
      <input
        type={props.type}
        value={props.value}
        onChange={(e) => props.change(e, props.type)}
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
export default memo(Inputs);

// export default memo(Inputs);
