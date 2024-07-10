
const initState = {
    errorRegister: ""
}
const errorReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'register/error':
            return{
                ...state,
                errorRegister: action.payload.errorRegister
            };
        default:
            return state;
    }
}
export default errorReducer