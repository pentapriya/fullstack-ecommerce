import React, { useContext } from 'react'
import emptycart from '../assets/empty-cart.png'
import { ShopContext } from '../context/ShopContext'

const EmptyCart = () => {
    const {navigate}=useContext(ShopContext)
  return (

     <div className='w-full h-[70vh] flex items-center justify-center'>
        <div className="flex flex-col items-center justify-center gap-6">
            <img className='w-40' src={emptycart} alt='Empty Cart' />
            <p className='font-medium text-center'>Your Cart Is Empty</p>
            <button onClick={()=>navigate('/collections')} className='bg-black text-white text-center px-5 py-2 m-10 border rounded-md cursor-pointer'>Shop Now!!!</button>
        </div>
    </div>

  )
}

export default EmptyCart