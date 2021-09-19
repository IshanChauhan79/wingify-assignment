import React from "react";
import classes from "./CreateAccount.module.css";

function CreateAccount() {
  return (
    <div className={classes.CreateAccount}>
      <div className={classes.TItle}>Create an account</div>
      <div className={classes.InputDataContainer}>
        <div className={classes.InputDataDescription}>Enter your email</div>
        <input type="email" />
      </div>
      <div className={classes.InputDataContainer}>
        <div className={classes.InputDataDescription}>
          Date of birth
          <span className={classes.InputDataDescriptionSpan}> (Optional)</span>
        </div>
        <input type="email" />
      </div>
      <div className={classes.InputDataContainer}>
        <div className={classes.InputDataDescription}>
          Chosse a strong password
        </div>
        <input type="password" />
      </div>
      <div className={classes.InputDataContainer}>
        <div className={classes.InputDataDescription}>
          Are you an agency or individual?
        </div>
        <div className={classes.InputRadioButton}>
          <input
            type="radio"
            id="agency_individual"
            name="agency_individual"
            value="Agency"
          />
          <span>Agency</span>
          <input
            type="radio"
            id="agency_individual"
            name="agency_individual"
            value="Individual"
          />
          <span>Individual</span>
        </div>
      </div>
      <button className={classes.SubmitAccountForm}>Submit</button>
    </div>
  );
}

export default CreateAccount;
