import React, { useCallback, useMemo, useState } from "react";
import classes from "./CreateAccount.module.css";
import Inputs from "../../UI/Inputs/Inputs";
import RadioButton from "../../UI/RadioButton/RadioButton";
import { validateInput, checkDate } from "../../../services/validateInput";
import SelectInput from "../../UI/SelectInput/SelectInput";
import { getYears, MONTHS, getMonthIndex } from "./constants";

function CreateAccount() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [agencyOrInd, setAgencyOrInd] = useState("agency");
  const [day, setday] = useState("");
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState("January");

  const [isDayValid, setIsDayValid] = useState(true);

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
      if (type === "day") {
        if (!isDayValid) {
          setIsDayValid(true);
        }
        setday(e.target.value.trim());
      }
    },
    [isEmailValid, isPasswordValid, isDayValid]
  );

  const yearChangedHandler = (value) => {
    setYear(value);
  };
  const monthChangedHandler = (value) => {
    setMonth(value);
  };

  const agencyIndividualChangeHandler = useCallback((e) => {
    setAgencyOrInd(e.target.value);
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    let checkEmail = validateInput(email, "email");
    let checkPassword = validateInput(password, "password");
    if (!checkEmail) {
      setIsEmailValid(false);
    }
    let checkDateValid = checkDate(day, getMonthIndex(month), year);
    if (day === "") {
      setIsDayValid(false);
    }
    if (!checkDateValid) {
      setIsDayValid(false);
    }

    if (!checkPassword) {
      setIsPasswordValid(false);
      return;
    }
    if (checkPassword && checkEmail && checkDateValid && checkDateValid) {
      console.log("email and password is valid");
      console.log(email, password, day, month, year, agencyOrInd);
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
            errorMessage="Please add valid email address"
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
              <Inputs
                type="number"
                typeFor="day"
                min={1}
                max={31}
                change={inputChangeHandler}
                value={day}
                error={!isDayValid}
              />
            </div>
            <div className={classes.DOBMonth}>
              <div className={classes.DOBType}>Month</div>
              <SelectInput
                options={MONTHS}
                value={month}
                change={monthChangedHandler}
              />
            </div>
            <div className={classes.DOBYear}>
              <div className={classes.DOBType}>Year</div>
              <SelectInput
                options={getYears()}
                value={year}
                change={yearChangedHandler}
              />
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
            errorMessage="Please add valid password"
          />
        </div>
        <div
          className={[
            classes.InputDataContainer,
            classes.InputDataRadioDesktop,
          ].join(" ")}
        >
          <div className={classes.InputDataDescription}>
            Are you an agency or individual?
          </div>
          {useMemo(
            () => (
              <RadioButton
                buttonList={["Agency", "Individual"]}
                name="agency_individual"
                change={agencyIndividualChangeHandler}
              />
            ),
            [agencyIndividualChangeHandler]
          )}
        </div>
        <div
          className={[
            classes.InputDataContainer,
            classes.InputDataRadioMobile,
          ].join(" ")}
        >
          <div className={classes.InputDataDescription}>
            Already using any of our other products?
            <span className={classes.InputDataDescriptionSpan}>
              {" "}
              (Optional)
            </span>
          </div>
          {useMemo(
            () => (
              <RadioButton
                buttonList={["yes", "No"]}
                name="agency_individual"
                change={agencyIndividualChangeHandler}
              />
            ),
            [agencyIndividualChangeHandler]
          )}
        </div>
        <button type="submit" className={classes.SubmitAccountForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
