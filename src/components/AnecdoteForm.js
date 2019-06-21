import React from 'react'
import { notificationChange } from '../reducers/notificationReducer'
import { connect } from 'react-redux'
import {createAnecdote} from '../reducers/anecdoteReducer'

const NewAnecdote = (props) => {

  const addAnecdote = async (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    props.createAnecdote(content)

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



export default connect(
  mapStateToProps,
  {createAnecdote, notificationChange}
)(NewAnecdote)