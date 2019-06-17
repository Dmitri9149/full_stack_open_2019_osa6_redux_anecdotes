import React from 'react';
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'


const App = (props) => {

  return (
    
    <div>
        <Notification store = {props.store} />
        <AnecdoteList store = {props.store} />
        <NewAnecdote store = {props.store} />
    </div>
  )
}

export default App
