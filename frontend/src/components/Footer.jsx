import React from 'react'
import shopsy from '../assets/shopify.png'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_3fr_3fr] gap-24 my-10 text-sm mx-30'>
        <div>
            <img src={shopsy} alt='' className='w-15 mb-5' />
            <p className='w-full text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus delectus iusto nisi culpa dolorum reprehenderit minus tempora.Tenetur sint officia totam optio!</p>
        </div>
        <div  className='ml-30'>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className='ml-30'>
            <p className='text-xl font-medium mb-5'>Get In Touch</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+1-212-456-8790</li>
                <li>contact@shopify.com</li>
                
            </ul>
        </div>
       
    </div>
    <div>
           
        <p className='py-5 text-sm text-center'>Copyright 2025@ shopsy.com - All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer
