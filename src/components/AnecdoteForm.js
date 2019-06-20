import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import anecdoteService from '../services/anecdotes'

const NewAnecdote = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const newAnecdote = await anecdoteService.createNew(content)
    props.createAnecdote(newAnecdote)

    props.notificationChange(`You just added    '${content}'`)
    setTimeout(() => 
      props.notificationChange(''), 5000) 
  
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