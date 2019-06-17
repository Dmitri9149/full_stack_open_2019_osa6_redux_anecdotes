import React from 'react';
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = (props) => {

  return (
    <div>
      <h2>Anecdotes</h2>
        <AnecdoteList store = {props.store} />
        <NewAnecdote store = {props.store} />
    </div>
  )
}

export default App
