import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');

  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    // check if the user enters an empty input
    // if you trim user input and there is nothing there return(dont submit) 
    if(enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        {/* if not isValid(if the input is empty) switch to red otherwise(:) stay black*/}
        <label style={{color: !isValid ? 'red' : 'black'}}>Course Goal</label>
        <input style ={{
        borderColor: !isValid ? 'red' : '#ccc', 
        background: !isValid ? 'salmon' : 'transparent'}}
        type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
