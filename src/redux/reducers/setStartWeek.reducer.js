const createWeek = (state = [], action) =>{
    console.log('create week', action )
    if (action.type === 'CREATE_WEEK') { 
      return action.payload.data[0]
    }
    else if(action.type === 'CREATE_DAY')
        return [...state, action.payload]
      return state
    }
export default createWeek