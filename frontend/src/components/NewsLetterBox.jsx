import React from 'react'

const NewsLetterBox = () => {
    const submithandler=(e)=>{
        e.preventDefault()
    }
  return (
    <div className='text-center w-150 mx-70'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam sit sapiente, laborum dolorum doloremque nihil repudiandae ducimus amet praesentium labore laboriosam! Natus sit eos id provident totam laudantium unde commodi.</p>
        <form onSubmit={submithandler} className='w-full flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input type='email' placeholder='enter your email' required className='w-full outline-none' />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>Subscribe</button>
        </form>
    </div>
  )
}

export default NewsLetterBox