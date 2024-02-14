const createWeek = (state = [], action) =>{
    console.log('create week', action )
    if (action.type === 'CREATE_WEEK') { 
      return action.payload
    }
      return state
    }
export default createWeek