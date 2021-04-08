export const increment = (step) => {
    return {
        type: 'INCREMENT',
        payload: step
    }
}

export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

export const signIn = () => {
    return {
        type: 'SIGN_IN'
    }
}