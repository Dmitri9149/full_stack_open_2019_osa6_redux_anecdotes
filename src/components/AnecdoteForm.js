import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const NewAnecdote = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    props.createAnecdote(event.target.anecdote.value)
    console.log('event--------->' , event.target.anecdote.value)
    const message = event.target.anecdote.value
    props.notificationChange(`You just added    ${message}`)
    setTimeout(() => 
      props.notificationChange(''), 5000) 
      event.target.anecdote.value = ''
  
  }
  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">lisää</button>
    </form>
  )
}

const mapStateToProps = (state) => {
  // joskus on hyödyllistä tulostaa mapStateToProps:ista...
  console.log(state)
  return {
    notification: state.notification
  }
}

const mapDispatchToProps = {
  createAnecdote,
  notificationChange
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewAnecdote)