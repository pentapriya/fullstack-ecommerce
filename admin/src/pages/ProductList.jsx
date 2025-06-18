import React, { useEffect, useState } from 'react'
import { backendURL, currency } from '../App'
import axios from 'axios'
import { toast } from 'react-toastify'

const ProductList = ({token}) => {
 

  const [list,setList]=useState([])

  const fetchList=async()=>{
    try{
       const response=await axios.get(backendURL+"/api/product/allProducts",{headers:{token}})
      if(response.data.success){
        setList(response.data.products)
      }
      else{
        toast.error(response.data.message)
      }
    }
    catch(error){
       toast.error(error.message)
    }
    
  }
  
  const deleteProduct=async(productId)=>{
    try{
       const response=await axios.post(backendURL+"/api/product/delete",{productId},{headers:{token}})
       if(response.data.success){
        toast.success("product deleted successfully")
        await fetchList()
       }
       else{
        toast.error(response.data.message)
       }
    }
    catch(error){
      toast.error(error.message)
    }
   

  }

  useEffect(()=>{
    fetchList()
  },[])
  return (
    <>
      <p className='mb-2'>All Products List</p>
      <div className="flex flex-col gap-2">
        <div className="md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center px-2 py-1 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>
       
          {list.map((item)=>(
            <div className="md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center px-2 py-1 border bg-gray-100 text-sm">
              <img className='w-20' src={item.image[0]} alt=''/>
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency}{item.price}</p>
              <p onClick={()=>deleteProduct(item._id)} className='text-center cursor-pointer'>X</p>
            </div>
          ))}
          
      </div>
    </>
  )
}

export default ProductList