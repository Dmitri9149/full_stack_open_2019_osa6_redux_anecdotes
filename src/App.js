import React from 'react';
import {vote, createAnecdote} from './reducers/anecdoteReducer'

const App = (props) => {
  const anecdotes = props.store.getState()
  const store = props.store

  const addAnecdote = (event) => {
    event.preventDefault()
    store.dispatch(
      createAnecdote(event.target.anecdote.value)
    )
    event.target.anecdote.value = ''
  }
  

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => 
              store.dispatch(vote(anecdote.id))
            }
            >
            vote 
            </button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name = 'anecdote'/>
        </div>
        <button type = 'submit'>create</button>
      </form>
    </div>
  )
}

export default App
