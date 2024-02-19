const setWeeks = (state = [], action) =>{
  console.log('action', action)
    if (action.type === 'SET_WEEKS') {
        return action.payload 
    }
      return state
    }

export default setWeeks