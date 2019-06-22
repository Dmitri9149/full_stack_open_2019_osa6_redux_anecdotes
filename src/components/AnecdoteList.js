import React from 'react'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const AnecdoteList = (props) => {

 
  return (
        <div>
      <h2>Anecdotes</h2>
  
      {props.visibleAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => 
              { console.log('anecdote.id ------------->', anecdote.id)
                props.vote(anecdote.content, anecdote.votes, anecdote.id)
                props.setNotification(`You voted     '${anecdote.content}'`, 10) 
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

const anecdotesToShow = ({anecdotes, filter}) => {

  return filter.length === 0
    ? anecdotes 
    : anecdotes.filter(p => p.content.toLowerCase().includes(filter.toLowerCase()) )
}

const mapStateToProps = (state) => {
  // joskus on hyödyllistä tulostaa mapStateToProps:ista...
  console.log(state)
  return {
    visibleAnecdotes: anecdotesToShow(state)
  }
}

const mapDispatchToProps = {
  vote,
  setNotification
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)