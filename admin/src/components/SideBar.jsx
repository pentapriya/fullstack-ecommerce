import React from 'react'
import add from '../assets/add.png'
import list from '../assets/item.png'
import orders from '../assets/checkout.png'
import {NavLink} from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-1'>
        <div className='flex flex-col gap-4 pt-6 pl-[10%] text-[15px]'>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to='/add'>
                <img src={add} alt='' className='w-5 h-5'/>
                <p className='hidden md:block'>Add Items</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to='/list'>
                <img src={list} alt='' className='w-5 h-5'/>
                <p className='hidden md:block'>List Items</p>
            </NavLink>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-1' to='/orders'>
                <img src={orders} alt='' className='w-5 h-5'/>
                <p className='hidden md:block'>Orders</p>
            </NavLink>
        </div>
    </div>
  )
}

export default SideBar