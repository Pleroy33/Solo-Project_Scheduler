const employees = (state = [], action) =>{
if (action.type === 'SET_EMPLOYEES') {
    return action.payload 
}
  return state
}

export default employees