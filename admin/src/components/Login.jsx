import React, { useState } from 'react'
import { backendURL } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = ({setToken}) => {

    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submithandler=async(e)=>{
       try{
            e.preventDefault()
           const response=await axios.post(backendURL+'/api/user/admin',{email,password})
           if(response.data.success){
            setToken(response.data.token)
            toast.success("logged in successfully")
           }
           else{
            toast.error(response.data.message)
           }
       }catch(error){
        console.log(error)
        toast.error(error.message)
       }
    }

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
        <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
            <h1 className="text-2xl font-bold mb-4">Admin panel</h1>
            <form onSubmit={submithandler}>
                <div className="mb-3 min-w-72">
                    <p className='text-sm font-medium text-gray-700 mb-2'>Email address</p>
                    <input className='rounded-medium w-full px-3 py-2 border border-gray-300 outline-none' type='email' placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="mb-3 min-w-72">
                    <p className='text-sm font-medium text-gray-700 mb-2'>Password</p>
                    <input className='rounded-medium w-full px-3 py-2 border border-gray-300 outline-none' type='password' placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                <button type='submit' className='mt-2 w-full px-2 py-2 rounded-md text-white bg-black cursor-pointer'>Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login