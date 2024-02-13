const editEmployee = (state={}, action) => {
    if (action.type === 'SET_EDIT_SHIFT'){
        // console.log('IN SET EDIT EMPLOYEE', action.payload)
        return action.payload
    }
        else if (action.type === 'EDIT_SHIFT') 
        return {
            ...state, 
            [action.payload.property]: action.payload.value
        }
        else if (action.type === 'EDIT_CLEAR') {
            return  (state = {})
        }
    return state
}

export default editEmployee