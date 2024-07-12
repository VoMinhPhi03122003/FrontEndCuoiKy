
const initState = {
    errorRegister: "",
    errorLogin:"",
    errorChangePass:"",
    errorForgotPass:"",
    errorVerifyPass:""
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
        case 'verifyPass/error':
            return {
                ...state,
                errorVerifyPass: action.payload.errorVerifyPass
            }
        default:
            return state;
    }
}
export default errorReducer