
const initState = {
    errorRegister: "",
    errorLogin:"",
    errorChangePass:"",
    errorForgotPass:""
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
        case 'changePass/error':
            return {
                ...state,
                errorChangePass: action.payload.errorChangePass
            }
        case 'forgotPass/error':
            return {
                ...state,
                errorForgotPass: action.payload.errorForgotPass
            }
        default:
            return state;
    }
}
export default errorReducer