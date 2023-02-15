const setIndividualTrail = (state = {data:{attributes:{name:'no-name'}}}, action) => {
    switch(action.type) {
        case 'SET_TRAIL':
            return action.payload
        default:
            return state
    }
}

export default setIndividualTrail