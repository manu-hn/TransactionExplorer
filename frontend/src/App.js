import React from 'react'

import NavBar from './components/NavBar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full'>
      <section className=''>
        <NavBar />
        <Outlet />
      </section>
    </div>
  )
}

export default App