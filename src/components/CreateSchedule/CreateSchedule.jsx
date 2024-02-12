import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory,useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { DateTime } from 'luxon';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.
function CreateSchedule() {
  const moment = DateTime.local()
  console.log('moment:', moment)
  const yearNumber = moment.localWeekYear
  const weekDay = moment.localWeekday
  console.log('local weekday', weekDay)
  console.log('yearNumber:', yearNumber)
  const weekNumber = moment.localWeekNumber
  console.log('weekNumber:',weekNumber)
  const dt = DateTime.fromObject({
    weekYear: yearNumber,
    weekNumber: weekNumber
  });
  
  const dt2 = DateTime.fromObject({
    weekYear: yearNumber,
    weekNumber: (weekNumber)+1
  });


  const dt3 = DateTime.fromObject({
    weekYear: yearNumber,
    weekNumber: (weekNumber)+2
  });

  const dt4 = DateTime.fromObject({
    weekYear: yearNumber,
    weekNumber: (weekNumber)+3
  });

  const dt5 = DateTime.fromObject({
    weekYear: yearNumber,
    weekNumber: (weekNumber)+4
  });
  const dateFromStr = dt.startOf('week', {useLocaleWeeks: true});
  const dateToStr = dt.endOf('week', {useLocaleWeeks: true});
  const dateFromStr2 = dt2.startOf('week', {useLocaleWeeks: true});
  const dateToStr2 = dt2.endOf('week', {useLocaleWeeks: true});
  const dateFromStr3 = dt3.startOf('week', {useLocaleWeeks: true});
  const dateToStr3 = dt3.endOf('week', {useLocaleWeeks: true});
  const dateFromStr4 = dt4.startOf('week', {useLocaleWeeks: true});
  const dateToStr4 = dt4.endOf('week', {useLocaleWeeks: true});
  const dateFromStr5 = dt5.startOf('week', {useLocaleWeeks: true});
  const dateToStr5 = dt5.endOf('week', {useLocaleWeeks: true});







  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);

  



  

  const history = useHistory();



  return (
    <>
      <div>
        <h1>Scheduling</h1>
        <label htmlFor="weeks">Choose week:</label>

        <select name="week" id="week">
          <option value={(dateFromStr.toFormat('MM-dd-yyyy'))}>{(dateFromStr.toFormat('MM-dd-yyyy'))} to {(dateToStr.toFormat('MM-dd-yyyy'))}</option>
          <option value={(dateFromStr2.toFormat('MM-dd-yyyy'))}>{(dateFromStr2.toFormat('MM-dd-yyyy'))} to {(dateToStr2.toFormat('MM-dd-yyyy'))}</option>
          <option value={(dateFromStr3.toFormat('MM-dd-yyyy'))}>{(dateFromStr3.toFormat('MM-dd-yyyy'))} to {(dateToStr3.toFormat('MM-dd-yyyy'))}</option>
          <option value={(dateFromStr4.toFormat('MM-dd-yyyy'))}>{(dateFromStr4.toFormat('MM-dd-yyyy'))} to {(dateToStr4.toFormat('MM-dd-yyyy'))}</option>
          <option value={(dateFromStr5.toFormat('MM-dd-yyyy'))}>{(dateFromStr5.toFormat('MM-dd-yyyy'))} to {(dateToStr5.toFormat('MM-dd-yyyy'))}</option>


        </select>
        
      </div>
      {/* <button type='button' onClick={() => { history.push(`weekschedulereview/${(dateFromStr.toFormat('MM-dd-yyyy'))}`) }}>View Schedule</button> */}
      <button type='button' onClick={() => { history.push('/viewweeks/') }}>Weeks Scheduled</button>

      <button type='button' onClick={() => { history.push(`chooseday/${(dateFromStr.toFormat('MM-dd-yyyy'))}`) }}>Accept</button>

    </>
  );

}

export default CreateSchedule;