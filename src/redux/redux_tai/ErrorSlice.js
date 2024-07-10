
const initState = {
    errorRegister: "",
    errorLogin:""
}
const errorReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'register/error':
            return{
                ...state,
                errorRegister: action.payload.errorRegister
            };
        case 'login/error':
            return{
                ...state,
                errorLogin: action.payload.errorLogin
            };
        default:
            return state;
    }
}
export default errorReducer