import React from 'react'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = ({store}) => {
  return (
    <div>
      <h2>Anecdotes</h2>
      {store.getState().anecdotes.map(anecdote =>
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

    </div>
  )
}

export default  AnecdoteList 