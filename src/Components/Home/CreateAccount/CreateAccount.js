import React from "react";
import classes from "./CreateAccount.module.css";
import Inputs from "../../UI/Inputs/Inputs";
import RadioButton from "../../UI/RadioButton/RadioButton";

function CreateAccount() {
  return (
    <div className={classes.CreateAccount}>
      <div className={classes.TItle}>Create an account</div>
      <div className={classes.InputDataContainer}>
        <div className={classes.InputDataDescription}>Enter your email</div>
        <Inputs type="text" error={false} />
      </div>
      <div className={classes.InputDataContainer}>
        <div className={classes.InputDataDescription}>
          Date of birth
          <span className={classes.InputDataDescriptionSpan}> (Optional)</span>
        </div>
        <div className={classes.DOBContainer}>
          <div className={classes.DOBDate}>
            <div className={classes.DOBType}>Date</div>
            <Inputs type="nnumber" min={1} max={31} error={false} />
          </div>
          <div className={classes.DOBMonth}>
            <div className={classes.DOBType}>Month</div>
            <select name="Month" id="Month">
              <option value="Jan">Jandfgh</option>
              <option value="Feb">Feb</option>
              <option value="mar">mar</option>
              <option value="apr">apr</option>
              <option value="may">may</option>
              <option value="june">june</option>
              <option value="july">july</option>
              <option value="aug">aug</option>
              <option value="sep">sep</option>
              <option value="oct">oct</option>
              <option value="nov">nov</option>
              <option value="dec">dec</option>
            </select>
          </div>
          <div className={classes.DOBYear}>
            <div className={classes.DOBType}>Year</div>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className={classes.InputDataContainer}>
        <div className={classes.InputDataDescription}>
          Chosse a strong password
        </div>
        <Inputs type="text" error={false} />
      </div>
      <div className={classes.InputDataContainer}>
        <div className={classes.InputDataDescription}>
          Are you an agency or individual?
        </div>
        <RadioButton
          buttonList={["Agency", "Individual"]}
          name="agency_individual"
        />
      </div>
      <button className={classes.SubmitAccountForm}>Submit</button>
    </div>
  );
}

export default CreateAccount;
