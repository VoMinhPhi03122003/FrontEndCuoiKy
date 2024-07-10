export const registerError = (data) =>{
    return{
        type: 'register/error',
        payload: data
    }
}