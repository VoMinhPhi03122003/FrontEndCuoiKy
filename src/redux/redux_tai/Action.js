export const registerError = (data) =>{
    return{
        type: 'register/error',
        payload: data
    }
}

export const loginError = (data) =>{
    return{
        type: 'login/error',
        payload: data
    }
}