import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import close_icon from '../assets/close.png'
import { useLocation } from 'react-router-dom'
import search_icon from '../assets/search-interface-symbol.png'

const SearchBar = () => {
    const {search,setSearch,showSearch,setShowSearch}=useContext(ShopContext)
    const location=useLocation()
    const [visible,setVisible]=useState(false)

    useEffect(()=>{
        if(location.pathname.includes('collections')){
            setVisible(true)
        }
        else{
            setVisible(false)
        }
    },[location])
  return showSearch && visible?(
    <div className='border-t border-b bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 mx-3 rounded-full w-3/4'>
            <input className='flex-1 outline-none bg-inherit text-sm' value={search} onChange={e=>setSearch(e.target.value)} type='text' placeholder='search....'/>
            <img className='w-4' src={search_icon} alt='' />
        </div>
        <img className='inline w-3 cursor-pointer' onClick={()=>{setShowSearch(false)}} src={close_icon} alt='' />
    </div>
  ):null
}

export default SearchBar