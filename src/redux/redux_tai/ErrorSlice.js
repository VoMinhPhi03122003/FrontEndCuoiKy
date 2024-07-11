
const initState = {
    errorRegister: "",
    errorLogin:"",
    errorChangePass:""
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
        default:
            return state;
    }
}
export default errorReducer