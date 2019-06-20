

const anecdoteReducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToChange = state.find(n => n.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, votes: anecdoteToChange.votes +1 
      }
      const unOrderedAnecdotes = state.map(anecdote => anecdote.id !== id ? anecdote : changedAnecdote)
      return unOrderedAnecdotes.sort ((b,a) => (a.votes - b.votes))
      
    case 'NEW_ANECDOTE':
      return [...state, action.data]
     case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const vote = (id) => {
  console.log('vote', id)
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data
  }
}

export const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}



export default anecdoteReducer