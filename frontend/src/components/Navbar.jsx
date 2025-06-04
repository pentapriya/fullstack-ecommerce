import React, { useContext, useState } from 'react'
import shopsy from '../assets/shopify.png'
import search from '../assets/magnifying-glass.png'
import { Link, NavLink } from 'react-router-dom'
import profile from '../assets/account.png'
import cartIcon from '../assets/shopping-cart.png'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const {setShowSearch,getCartCount}=useContext(ShopContext)
  return (
    <div className='flex align-center justify-between py-5 font-medium'>
      <div className='flex align-center'>
        <img src={shopsy} className='w-10' alt='' />
        <p className='pt-2 text-gray-700 font-bold'>Shopsy</p>
      </div>
      <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>Home</p>
          <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden'/>
        </NavLink>
        <NavLink to='/collections' className='flex flex-col items-center gap-1'>
          <p>Collections</p>
          <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden'/>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>About</p>
          <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden'/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>Contact</p>
          <hr className='w-2/4 h-[1.5px] bg-gray-700 border-none hidden'/>
        </NavLink>
        
      </ul>
      <div className='flex items-center gap-6'>
        <img onClick={()=>setShowSearch(true)} src={search} alt='' className='w-5 cursor-pointer' />
        <div className='group relative'>
          <img src={profile} alt='' className='w-5 cursor-pointer' />
          <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
            <div className='flex flex-col gap-2 w-36 px-5 py-3 bg-slate-100 text-gray-500 rounded'>
              <Link to={'/login'}><p className='cursor-pointer hover:text-black'>My Profile</p></Link>
              <p className='cursor-pointer hover:text-black'>Orders</p>
              <p className='cursor-pointer hover:text-black'>Logout</p>
            </div>
          </div>
          
        </div>
        <Link to='/cart' className='relative'>
              <img src={cartIcon} alt='' className='w-8 min-w-8' />
              <p className='absolute w-4 bg-black text-white right-[-5px] bottom-[-5px] text-center leading-4 aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
        </Link>
      </div>
    </div>
  )
}

export default Navbar