import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="formPanel2">
      <div className='table'>
      <h1>Easy Schedule</h1>
      <h2 >Created by Paul LeRoy</h2>
      <h3>Technology Stacks Used</h3>
      <ul>
        <li>React</li>
        <li>Redux</li>
        <li>Redux-Sagas</li>
        <li>Passport</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Luxon 3</li>
        <li>Material UI</li>
      </ul>

    <p>Thank you to my instructors Key and Dane, my mentors Olivia and Adam and the entire peridot cohort for their support.  Thanks also to the entire staff at Prime Digital Academy for their guidance as I transition to software engineering.  Finally, thanks to all the people in my life that suggested ideas, gave feedback and inspired this project, especially my kids, Micah and Ollie.  </p>
      </div>
    </div>
  );
}

export default InfoPage;
