import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import TotalCart from '../components/TotalCart'
import razorpay from '../assets/razorpay-icon.png'
import stripe from '../assets/stripe.png'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
  const [method,setMethod]=useState('cod')
  const {navigate}=useContext(ShopContext)
  return (
    <div className='flex flex-row justify-between gap-4 pt-5 min-h-[80vh] border-t'>
      <div className="flex flex-col w-[50%] gap-4">
        <div className="text-xl my-3">
          <Title text1={'Delivery'} text2={'information'}/>
        </div>
        <div className="flex gap-3 w-full">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First name'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last name'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Email address'/>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street'/>
        <div className="flex gap-3 w-full">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State'/>
        </div>
        <div className="flex gap-3 w-full">
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Zipcode'/>
          <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country'/>
        </div>
        <input className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Phone'/>
      </div>
      <div className="mt-8">
        <div className="mt-8 min-w-80">
          <TotalCart />
        </div>
        <div className="mt-12">
          <Title text1={'PAYMENT'} text2={'METHODS'}/>
        </div>
        <div className="flex gap-3 flex-col lg:flex-row">
          <div onClick={()=>setMethod('razorpay')} className="flex items-center gap-3 border px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='razorpay'?'bg-green-400':''}`}></p>
            <img className='h-10 mx-4' src={razorpay} alt='' />
          </div>
          <div onClick={()=>setMethod('stripe')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='stripe'?'bg-green-400':''}`}></p>
            <img className='h-5 mx-4' src={stripe} alt='' />
          </div>
          <div onClick={()=>setMethod('cod')} className="flex items-center gap-3 border p-2 px-3 cursor-pointer">
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method==='cod'?'bg-green-400':''}`}></p>
            <p className='text-gray-500 text-sm font-medium'>CASH ON DELIVERY</p>
          </div>
        </div>
        
          <div className="w-full text-end mt-8">
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm mr-20 cursor-pointer'>Place Order</button>
          </div>
        
      </div>
    </div>
  )
}

export default PlaceOrder