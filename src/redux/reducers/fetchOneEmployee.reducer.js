const fetchOneEmployee = (state = [], action) =>{
    if (action.type === 'SET_ONE_EMPLOYEE') { 
      return action.payload
    }
      return state
    }
export default fetchOneEmployee