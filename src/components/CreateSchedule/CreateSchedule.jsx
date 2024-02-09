import React, { useState } from 'react';
import {useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function CreateSchedule() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);



  const history = useHistory();

  

  return (
    <>
    <div>
      <h1>Scheduling</h1>
      <p>Placeholder DropDown</p>
      <h2>Choose Year</h2>
      <p>Placeholder DropDown</p>
      <h3>Choose Week For Scheduling</h3>
    </div>
     <button type ='button'onClick={()=>{history.push('chooseday')}}>Accept</button>
    </>
  );
  
}

export default CreateSchedule;