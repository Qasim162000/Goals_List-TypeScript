import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

type CourseInputProps = {
  onAddGoal: (enteredText: any) => void;
  // formSubmitHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
};

const CourseInput = (props: CourseInputProps) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
