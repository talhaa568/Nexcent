import { useState } from 'react'
import React from 'react'


import './App.css'
import Signup from './components/Signin/Signup'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import Login from './components/Signin/Login'
import Nav from './components/Home/Nav'
import Hero from './components/Home/Hero'
import Clients from './components/Home/Clients'
import Home from './components/Home/Home'
import Button from './components/Home/Button'

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      
    <Route path="/" element={<Login/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/home" element={<Home/>}></Route>
    </Routes>

</BrowserRouter>
    </>
  )
}

export default App
