import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routing from './routes/index'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>

    </>
  )
}

export default App