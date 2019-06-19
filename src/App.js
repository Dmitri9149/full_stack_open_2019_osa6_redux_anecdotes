import React from 'react';
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Notification from './components/Notification'
import Filter from './components/Filter'


const App = (props) => {

  console.log('App.props------------>', props)
  console.log('app.props.store----------->', props.store)

  return (
    
    <div>
        <Notification store = {props.store} />
        <Filter store = {props.store} />
        <AnecdoteList store = {props.store} />
        <NewAnecdote store = {props.store} />
    </div>
  )
}

export default App
