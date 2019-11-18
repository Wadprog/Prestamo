import React from 'react'
import Navbar from './component/Navbar'
import { Switch } from 'react-router-dom'
import './App.css'

function App() {
  const { Fragment } = React
  return (
    <Fragment>
      <main className="bg-main">
        <Navbar />
      </main>
    </Fragment>
  )
}

export default App
