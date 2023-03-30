

import React from 'react'
import { Toaster } from 'react-hot-toast'
import TodoList from './components/TodoList'

function App() {
  return (
    <div>
      
      <TodoList/>
      <Toaster
      
      position='bottom-center'
      
      />
    </div>
  )
}

export default App

