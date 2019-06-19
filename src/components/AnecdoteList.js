import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = ({store}) => {
  const filter = store.getState().filter
  const anecdotes = store.getState().anecdotes
  const anecdotesToShow = filter.length === 0
  ? anecdotes 
  : anecdotes.filter(p => p.content.toLowerCase().includes(filter.toLowerCase()) )

 
  return (
        <div>
      <h2>Anecdotes</h2>
      {console.log('total stock------------->', store.getState())}

      {anecdotesToShow.map(anecdote =>
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

const mapStateToProps = (state) => {
  // joskus on hyödyllistä tulostaa mapStateToProps:ista...
  console.log(state)
  return {
    anecdotes: state.anecdotes,
    filter: state.filter
  }
}

export default connect(
  mapStateToProps
)(AnecdoteList)