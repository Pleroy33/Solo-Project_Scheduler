const setOneWeek = (state = [], action) =>{
    if (action.type === 'SET_ONE_WEEK') { 
      return action.payload
    }
      return state
    }
export default setOneWeek