const shifts = (state = [], action) =>{
    if (action.type === 'SET_SHIFTS') {
        return action.payload 
    }
      return state
    }

export default shifts
    