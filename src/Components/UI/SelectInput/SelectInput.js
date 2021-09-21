import React, { useState } from "react";
import classes from "./SelectInput.module.css";

//return custom select button
function SelectInput(props) {
  const [open, setOpen] = useState(false);

  // used for showing and hiding drop down
  const dropDownValueClicked = (value) => {
    setOpen(false);
    props.change(value);
  };

  // displays elements of drop down
  const dropDown = open ? (
    <div className={classes.DropdownMenu}>
      {props.options.map((opt) => {
        if (props.value === opt) {
          return (
            <div className={classes.SelctedOption} key={opt}>
              {opt}
            </div>
          );
        }
        return (
          <div key={opt} onClick={() => dropDownValueClicked(opt)}>
            {opt}
          </div>
        );
      })}
    </div>
  ) : null;

  return (
    <div
      className={[classes.SelectInput, open ? classes.DropMenuOpened : ""].join(
        " "
      )}
    >
      <div
        className={classes.SelectButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        <div>{props.value}</div>
        <img
          src="https://img.icons8.com/material-sharp/24/000000/give-way--v1.png"
          alt=""
          className={open ? classes.RotateImageForOpenDropDown : null}
        />
      </div>
      {dropDown}
    </div>
  );
}

export default SelectInput;
