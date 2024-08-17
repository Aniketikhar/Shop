import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Products from './Pages/Products/Products'
import SignUp from './Pages/SignUp/SignUp'
import Login from './Pages/Login/Login'
import NotFound from './Pages/NotFound/NotFound'

function App() {

  return (
    <>
    <Routes>
      <Route path='/products' element={<Products /> } />
      <Route path='/' element={<SignUp /> } />
      <Route path='/login' element={<Login /> } />
      <Route path='/*' element={<NotFound /> } />
    </Routes>
    </>
  )
}

export default App
