const loadingReducer = (state = false, action) => {
  switch(action.type) {
      case 'TOGGLE':
          return state === true ? false : true
      default:
          return state
  }
}

export default loadingReducer