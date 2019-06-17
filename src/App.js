import React from 'react';
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = (props) => {

  return (
    
    <div>
      {props.store.getState().notification}
        <AnecdoteList store = {props.store} />
        <NewAnecdote store = {props.store} />
    </div>
  )
}

export default App
