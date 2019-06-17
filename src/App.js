import React from 'react';
import {vote, createAnecdote} from './reducers/anecdoteReducer'
import NewAnecdote from './components/AnecdoteForm'

const App = (props) => {
  const anecdotes = props.store.getState()
  const store = props.store


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
        <NewAnecdote store = {store} />

    </div>
  )
}

export default App
