import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function ChooseDay() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  console.log('on ChooseDay Schedule');
  const history = useHistory();

  return (
    <>
      <div>
        <h1>Placeholder Weekdate xx/xx/xx to xx/xx/xx</h1>

        <h2>Select Day to Schedule</h2>


      </div>

      <div>
      <button type='button' onClick={() => { history.push('Sunday') }}>Sunday</button>
      <button type='button' onClick={() => { history.push('Monday') }}>Monday</button>
      <button type='button' onClick={() => { history.push('Tuesday') }}>Tuesday</button>
      <button type='button' onClick={() => { history.push('Wednesday') }}>Wednesday</button>
      <button type='button' onClick={() => { history.push('Thursday') }}>Thursday</button>
      <button type='button' onClick={() => { history.push('Friday') }}>Friday</button>
      <button type='button' onClick={() => { history.push('Saturday') }}>Saturday</button>
      </div>

      <div>
      <button type='button' onClick={() => { history.push('reviewschedule/{placeholder}') }}>View Schedule</button>

      </div>

    </>
  );

}

export default ChooseDay;