export default (state = 0, action) => {
  switch (action.type) {
    case 'INCREASE':
      return state + 1
    case 'DECREASE':
      return state - 1
    case 'ZERO': 
      return state = 0
    case 'TEN': 
      return state + 10
    default:
      return state
  }
}
