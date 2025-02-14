

export const usernameValidator = (username='Aniket') => {
    const pattern = new RegExp(/^[A-Za-z0-9_]+$/)
    if(pattern.test(username)){
        return {isValid: true}
    }else{
        return {isValid: false, errorMessage: 'Invalid Username'}
    }
}