
const initState = {
    error: ""
}
const registerReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'register/error':
            return{
                ...state,
                error: action.payload.error
            };
        default:
            return state;
    }
}
export default registerReducer