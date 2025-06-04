import React from 'react'
import Title from '../components/Title'
import contact from '../assets/contact.png'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-20 border-t">
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className="my-10 flex flex-row justify-center gap-10 mb-28">
        <img src={contact} alt='' />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className='font-semibold text-xl text-gray-600'>Our Store</p>
          <p className='text-gray-500'>54709 Williams station <br /> Suite 350 Washington, USA</p>
          <p className='text-gray-500'>Tel:(415) 444-1234 <br /> admin@shopsy.com</p>
          <p className='font-semibold text-xl text-gray-600'>Careers at Shopsy</p>
          <p className='text-gray-500'>Learn more about our teams and job openings</p>
          <button className='border bg-black text-white cursor-pointer px-8 py-4 text-sm'>Explore jobs</button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  )
}

export default Contact