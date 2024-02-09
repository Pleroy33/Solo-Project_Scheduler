const editEmployee = (state=[], action) => {
    if (action.type === 'SET_EDIT_EMPLOYEE'){
        console.log('IN SET EDIT EMPLOYEE', action.payload)
        return action.payload
    }
        else if (action.type === 'EditOnchange') 
        return {
            ...state, 
            [action.payload.property]: action.payload.value
        }
    return state
}

export default editEmployee