import React, { useContext, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { ShopContext } from '../context/ShopContext'
import axios from 'axios'

const Login = () => {
  const [currentState,setCurrentState]=useState('Login')
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const {backendURL,token,setToken,navigate}=useContext(ShopContext)

  const submitHandler=async(e)=>{
    e.preventDefault()
    try{
      if(currentState==="SignUp"){
      const response=await axios.post(backendURL+"/api/user/register",{name,email,password})
        if(response.data.token){
          localStorage.setItem('token',response.data.token)
          toast.success(response.data.message)
          setCurrentState("Login")
          navigate("/login")
        }
        else{
          toast.error(response.data.message)
        }
    }
    else{
      const response=await axios.post(backendURL+"/api/user/login",{email,password})
      if(response.data.token){
         navigate("/")
          localStorage.setItem('token',response.data.token)
          setToken(response.data.token)
          toast.success(response.data.message)
         
        }
        else{
          toast.error(response.data.message)
        }
    }
    }catch(error){
      toast.error(error.message)
    }

  }

  return (
    <form className='flex flex-col items-center w-[90%] m-auto mt-14 gap-4 text-gray-800' onSubmit={submitHandler} >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800'/>
      </div>
      {currentState==='Login'?'':<input type='text' className='w-[50%] px-3 py-2 border border-gray-800' placeholder='Name' onChange={(e)=>setName(e.target.value)} value={name} required/>}
      <input type='email' className='w-[50%] px-3 py-2 border border-gray-800' placeholder='Email' onChange={(e)=>setEmail(e.target.value)} value={email} required/>
      <input type='password' className='w-[50%] px-3 py-2 border border-gray-800' placeholder='Password' onChange={(e)=>setPassword(e.target.value)} value={password} required/>
      <div className='flex justify-between mt-[-8px] text-sm gap-70'>
        <p className='cursor-pointer'>Forgot your password?</p>
        {currentState==='Login'?<p onClick={()=>setCurrentState('SignUp')} className='cursor-pointer'>create an account</p>:<p onClick={()=>setCurrentState('Login')} className='cursor-pointer'>login here</p>}
      </div>
      <button type="submit" className='border bg-black text-white px-8 py-2 mt-4 cursor-pointer'>{currentState==='Login'?'Login':'SignUp'}</button>
    </form>
  )
}

export default Login