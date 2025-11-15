import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='flex justify-between px-20 bg-amber-200 fixed w-full'>
      <Link to='/'>Home</Link>
       <Link to='/cart'>Cart</Link>
      </div>
    </div>
  )
}

export default Header
