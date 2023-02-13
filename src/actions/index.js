export const logToggle = () => {
    return{
        type: 'SIGN_IN'
    }
};
export const assignUsers = data => {
    return{
        type: 'ASSIGN_USERS',
        payload: data
    }
};
export const assignTrails = data => {
    return{
        type: 'ASSIGN_TRAILS',
        payload: data
    }
};
export const setUser = data => {
    return{
        type: 'SET_USER',
        payload: data
    }
};
export const setTrail = data => {
    return{
        type: 'SET_TRAIL',
        payload: data
    }
};