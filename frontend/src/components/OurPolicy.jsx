import React from 'react'
import exchange from '../assets/exchange.png'
import verify from '../assets/verify.png'
import headset from '../assets/headset.png'

const OurPolicy = () => {
  return (
    <div className='flex flex-row justify-around gap 12 text-center py-20 text-xs md:text-base text-gray700'>
        <div>
            <img src={exchange} alt='' className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
        </div>
        <div>
            <img src={verify} alt='' className='w-12 m-auto mb-5' />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
        </div>
        <div>
            <img src={headset} alt='' className='w-12 m-auto mb-5' />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>We provide 24/7 customer support</p>
        </div>
    </div>
  )
}

export default OurPolicy