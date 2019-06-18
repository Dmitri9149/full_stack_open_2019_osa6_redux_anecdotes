

const anecdotesAtStart = []


const initialState = anecdotesAtStart

const anecdoteToShowReducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'FILTER':
      return action.data.anecdotesToShow
      
    default:
      return state
  }
}


export const filterAnecdotes = (anecdotes, filter) => {

  const anecdotesToShow = filter.length === 0
  ? anecdotes 
  : anecdotes.filter(p => p.content.toLowerCase().includes(filter.toLowerCase()) )
  console.log('anecdotes', anecdotes)
  console.log('anecdotesToShow', anecdotesToShow)
  return {
    type: 'FILTER',
    data: {
      anecdotesToShow
    }
  }
}



export default anecdoteToShowReducer