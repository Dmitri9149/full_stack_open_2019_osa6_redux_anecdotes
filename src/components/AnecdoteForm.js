import React from 'react'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { notificationChange } from '../reducers/notificationReducer'

const NewAnecdote = ({store}) => {

  const addAnecdote = (event) => {
    event.preventDefault()
    store.dispatch(
      createAnecdote(event.target.anecdote.value)
    )
    console.log('event--------->' , event.target.anecdote.value)
    const message = event.target.anecdote.value
    store.dispatch(
      notificationChange(`You just added    ${message}`))
    setTimeout(() => 
      store.dispatch(notificationChange('')), 5000) 
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