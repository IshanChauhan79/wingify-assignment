import React, { useCallback, useMemo, useState } from "react";
import classes from "./CreateAccount.module.css";
import Inputs from "../../UI/Inputs/Inputs";
import RadioButton from "../../UI/RadioButton/RadioButton";
import { validateInput, checkDate } from "../../../services/validateInput";
import SelectInput from "../../UI/SelectInput/SelectInput";
import { getYears, MONTHS, getMonthIndex } from "./constants";

function CreateAccount() {
  // state used to store and validate inputs-------------------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [agencyOrInd, setAgencyOrInd] = useState("agency");
  const [day, setday] = useState("");
  const [year, setYear] = useState(2000);
  const [month, setMonth] = useState("January");
  const [isDayValid, setIsDayValid] = useState(true);

  // handle change value of   input - email,password and number
  // useCallback is used to prevent unnecessary rerender of component if email-password-day
  // if their value is not changed -(other value is changed)
  const inputChangeHandler = useCallback(
    (e, type) => {
      if (type === "email") {
        // remove error from the input
        if (!isEmailValid) {
          setIsEmailValid(true);
        }
        //set day on change of input value
        setEmail(e.target.value.trim());
      }

      if (type === "password") {
        // remove error from the input
        if (!isPasswordValid) {
          setIsPasswordValid(true);
        }
        //set password on change of input value
        setPassword(e.target.value.trim());
      }

      if (type === "day") {
        // remove error from the input
        if (!isDayValid) {
          setIsDayValid(true);
        }
        //set day on change of input value
        setday(e.target.value.trim());
      }
    },
    [isEmailValid, isPasswordValid, isDayValid]
  );

  // handle change in value of year
  const yearChangedHandler = (value) => {
    setYear(value);
  };

  // handle change in value of month
  const monthChangedHandler = (value) => {
    setMonth(value);
  };

  // handle change in value of radio button
  const agencyIndividualChangeHandler = useCallback((e) => {
    setAgencyOrInd(e.target.value);
  }, []);

  // when form is submitted run this function
  const formSubmitHandler = (e) => {
    e.preventDefault();
    // checks if input values are valid or not
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
      console.log(email, password, day, month, year);
    }
  };

  return (
    <div className={classes.CreateAccount}>
      <form onSubmit={formSubmitHandler} className={classes.Form}>
        <div className={classes.TItle}>Create an account</div>

        {/*-------- code for Email  input ------------------------------------------------ */}
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

        {/*-------- code for DOB inputs  ------------------------------------------------ */}
        <div className={classes.InputDataContainer}>
          <div className={classes.InputDataDescription}>
            Date of birth
            <span className={classes.InputDataDescriptionSpan}>
              {" "}
              (Optional)
            </span>
          </div>

          {/*-------- code for date input ------------------------------------------------ */}
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

            {/*-------- code for month input ------------------------------------------------ */}
            <div className={classes.DOBMonth}>
              <div className={classes.DOBType}>Month</div>
              <SelectInput
                options={MONTHS}
                value={month}
                change={monthChangedHandler}
              />
            </div>

            {/*-------- code for Year input ------------------------------------------------ */}
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

        {/*-------- code for passeord  Input ------------------------------------------------ */}
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

        {/*-------- code for radio button ------------------------------------------------ */}
        <div
          className={[
            classes.InputDataContainer,
            classes.InputDataRadioDesktop,
          ].join(" ")}
        >
          <div className={classes.InputDataDescription}>
            Are you an agency or individual?
          </div>

          {
            /* use memo is used to prevent unncessary rerender when other input are changed */
            useMemo(
              () => (
                <RadioButton
                  buttonList={["Agency", "Individual"]}
                  name="agency_individual"
                  change={agencyIndividualChangeHandler}
                />
              ),
              [agencyIndividualChangeHandler]
            )
          }
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
          {
            /* use memo is used to prevent unncessary rerender when other input are changed */
            useMemo(
              () => (
                <RadioButton
                  buttonList={["yes", "No"]}
                  name="yes_no"
                  change={agencyIndividualChangeHandler}
                />
              ),
              [agencyIndividualChangeHandler]
            )
          }
        </div>

        {/*-------- code for submit button ------------------------------------------------ */}
        <button type="submit" className={classes.SubmitAccountForm}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
