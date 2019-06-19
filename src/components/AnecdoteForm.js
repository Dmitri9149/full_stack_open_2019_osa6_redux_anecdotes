import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const NewAnecdote = (props) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    props.store.dispatch(
      createAnecdote(event.target.anecdote.value)
    )
    console.log('event--------->' , event.target.anecdote.value)
    const message = event.target.anecdote.value
    props.store.dispatch(
      notificationChange(`You just added    ${message}`))
    setTimeout(() => 
      props.store.dispatch(notificationChange('')), 5000) 
      event.target.anecdote.value = ''
  
  }
  return (
    <form onSubmit={addAnecdote}>
      <input name="anecdote" />
      <button type="submit">lisää</button>
    </form>
  )
}

export default NewAnecdote