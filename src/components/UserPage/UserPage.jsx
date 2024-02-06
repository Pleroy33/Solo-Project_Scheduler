import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector} from 'react-redux';
import { useHistory} from 'react-router-dom/cjs/react-router-dom.min';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const user = useSelector((store) => store.user);
 ;
  const history = useHistory()
  const handleAddClick = () => {
    history.push('/addemployee')
  }
  const handleCreateClick= () => {
    history.push('/createschedule')
  }

  return (
    <div className="container">
      <h2>Hello, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      <button className='btn' onClick={handleAddClick}>Add Employee</button>
      <button className='btn' onClick={handleCreateClick}>Create Schedule</button>
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
