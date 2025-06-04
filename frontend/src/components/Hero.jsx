import React from 'react'
import hero from '../assets/hero.png'

const Hero = () => {
  return (
        <div className='flex flex-row border border-gray-400 w-full gap-10 h-[350px]'>
            <div className='w-1/2 flex items-center justify-center py-10'>
                <div className='text-[#414141]'>
                    <div className='flex items-center gap-2'>
                        <p className='w-8 h-[2px] bg-[#414141]'></p>
                        <p className='font-medium text-sm'>OUR BESTSELLERS</p>
                    </div>
                    <h1 className='prata-regular text:3xl leading-relaxed text-bold lg:text-5xl'>Lastest Arrivals</h1>
                    <div className='flex items-center gap-2'>
                        <p className='font-medium text-sm'>SHOP NOW</p>
                        <p className='w-8 h-[2px] bg-[#414141]'></p>
                    </div>
                </div>
            </div>
            <div className='w-1/2 flex justify-center align-center'>
             <img src={hero} alt='' className='w-full p-10'/>
            </div>
            
           
        </div>
  )
}

export default Hero