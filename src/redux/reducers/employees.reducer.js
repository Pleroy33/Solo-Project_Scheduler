const employees = (state = [], action) =>{
if (action.type === 'SET_EMPLOYEES') {
    return action.payload 
}
  return state
}


// make one object that has keys loginMessage, registrationMessage
// these will be on the redux state at:
// state.errors.loginMessage and state.errors.registrationMessage
export default employees
