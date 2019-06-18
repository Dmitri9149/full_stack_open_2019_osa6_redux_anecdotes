const initialState = ''

const filterReducer = (state = initialState, action) => {
  console.log('state filter ', state)
  console.log('action filter', action)

  switch (action.type) {
    case 'SET_FILTER':
      return action.filter
    default:
      return state
  }
}


export const  createFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    filter
  }
}



export default filterReducer