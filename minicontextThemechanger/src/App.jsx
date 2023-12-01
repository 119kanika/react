import { useState } from 'react'
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/UseContextProvider'

function App() {

  return (
    <UserContextProvider>
      <h1>React with context API</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
