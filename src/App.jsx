import { useState } from 'react'
import './App.css'
import LogIn from './components/LogIn'
// dashboard component
import AuthProvider from './AuthProvider'
import { Route, Router, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Dashboard from './components/Dashboard'

function App() {
  

  return (
  <>
  <div className='App'>
    <Router>
  <AuthProvider>
    <Routes>
      <Route path='/login' element={<LogIn />} />
      <Route element={<PrivateRoute />} />
      <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
  </AuthProvider>
  </Router>
  </div>
  </>
  )
}

export default App
