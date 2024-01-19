import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className=' bg-slate-300 flex justify-center shadow-lg'>
      <section className='flex justify-between py-4 w-4/5'>
        <section>
          <h1 className='text-2xl'>transact<span className='text-orange-700 font-semibold'>Board</span></h1>
        </section>
        <section>
          <ul className='flex gap-4 '>
            <li className='hover:text-red-500 hover:underline underline-offset-2'><Link to={'/'}>Home</Link></li>
            <li className='hover:text-red-500 hover:underline underline-offset-2'><Link to={'/stats'}>Statistics</Link></li>
            <li className='hover:text-red-500 hover:underline underline-offset-2'><Link to={'/charts'}>Charts</Link></li>
           
          </ul>
        </section>
      </section>
    </div>
  )
}

export default NavBar