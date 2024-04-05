import React from 'react'
import './App.css'
import { Container } from 'react-bootstrap'
import { Route, Routes } from 'react-router-dom'
import Games from './components/Games'

function App() {

  return (
    <>
      <Container fluid>
        <Games/>
      </Container>
    </>
  )
}

export default App
