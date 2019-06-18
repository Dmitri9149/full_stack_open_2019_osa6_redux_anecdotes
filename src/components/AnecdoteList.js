import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

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
              {
                store.dispatch(vote(anecdote.id))
                store.dispatch(
                  notificationChange(`You voted  
                    '${anecdote.content}'`)) 

                setTimeout(() => 
                  store.dispatch(notificationChange('')), 5000)
              }
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