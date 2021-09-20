import React, { useCallback, useState } from "react";
import classes from "./CreateAccount.module.css";
import Inputs from "../../UI/Inputs/Inputs";
import RadioButton from "../../UI/RadioButton/RadioButton";
import { validateInput } from "../../../services/validateInput";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const inputChangeHandler = useCallback(
    (e, type) => {
      if (type === "email") {
        if (!isEmailValid) {
          setIsEmailValid(true);
        }
        setEmail(e.target.value.trim());
      }
      if (type === "password") {
        if (!isPasswordValid) {
          setIsPasswordValid(true);
        }
        setPassword(e.target.value.trim());
      }
    },
    [isEmailValid, isPasswordValid]
  );

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let checkEmail = validateInput(email, "email");
    let checkPassword = validateInput(password, "password");
    if (!checkEmail) {
      setIsEmailValid(false);
    }
    if (!checkPassword) {
      setIsPasswordValid(false);
      return;
    }
    if (checkPassword && checkEmail) {
      console.log("email and password is valid");
      console.log(email, password);
    }
  };

  return (
    <div className={classes.CreateAccount}>
      <form onSubmit={formSubmitHandler} className={classes.Form}>
        <div className={classes.TItle}>Create an account</div>

        <div className={classes.InputDataContainer}>
          <div className={classes.InputDataDescription}>Enter your email</div>
          <Inputs
            type="email"
            change={inputChangeHandler}
            error={!isEmailValid}
            value={email}
          />
        </div>
        <div className={classes.InputDataContainer}>
          <div className={classes.InputDataDescription}>
            Date of birth
            <span className={classes.InputDataDescriptionSpan}>
              {" "}
              (Optional)
            </span>
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
          <Inputs
            type="password"
            change={inputChangeHandler}
            error={!isPasswordValid}
            value={password}
          />
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
        <button type="submit" className={classes.SubmitAccountForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
