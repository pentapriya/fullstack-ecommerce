import React from 'react'
import shopify from '../assets/shopify.png'

const Navbar = ({setToken}) => {
  return (
    <div className='flex items-center py-2 px=[4%] justify-between'>
        <img className='w-16' src={shopify} alt=''/>
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white text-sm rounded-full px-5 py-2 cursor-pointer'>Logout</button>
    </div>
  )
}

export default Navbar