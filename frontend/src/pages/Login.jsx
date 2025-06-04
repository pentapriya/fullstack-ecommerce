import React, { useState } from 'react'

const Login = () => {
  const [currentState,setCurrentState]=useState('SignUp')

  const submitHandler=async(e)=>{
    e.preventDefault()
  }
  return (
    <form className='flex flex-col items-center w-[90%] m-auto mt-14 gap-4 text-gray-800'>
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState==='Login'?'':<input type='text' className='w-[50%] px-3 py-2 border border-gray-800' placeholder='Name' required/>}
      <input type='email' className='w-[50%] px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type='password' className='w-[50%] px-3 py-2 border border-gray-800' placeholder='Password' required/>
      <div className='flex justify-between mt-[-8px] text-sm gap-70'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {currentState==='Login'?<p onClick={()=>setCurrentState('SignUp')} className='cursor-pointer'>create an account</p>:<p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>login here</p>}
      </div>
      <button onSubmit={submitHandler()} className='border bg-black text-white px-8 py-2 mt-4 cursor-pointer'>{currentState==='Login'?'Login':'SignUp'}</button>
    </form>
  )
}

export default Login