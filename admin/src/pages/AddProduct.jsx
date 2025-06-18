import React, { useState } from 'react'
import image from '../assets/image-.png'
import { toast } from 'react-toastify'
import axios from 'axios'
import { backendURL } from '../App'

const AddProduct = ({token}) => {

  const [image1,setImage1]=useState(false)
  const [image2,setImage2]=useState(false)
  const [image3,setImage3]=useState(false)
  const [image4,setImage4]=useState(false)

  const [formData,setFormData]=useState({
    name:'',
    description:'',
    category:'men',
    subCategory:'Topwear',
    price:'',
    bestSeller:false,
    sizes:[],
  })

  const handleChange=(e)=>{
    const {name,value}=e.target
    setFormData((prev)=>({...prev,[name]:value}))
  }

  const toggleSize=(size)=>{
    setFormData(prev=>({...prev,sizes:prev.sizes.includes(size)?prev.sizes.filter((item)=>item!==size):[...prev.sizes,size]}))
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()

    const payload = new FormData()

  // Add basic form fields
  payload.append("name", formData.name)
  payload.append("description", formData.description)
  payload.append("category", formData.category)
  payload.append("subCategory", formData.subCategory)
  payload.append("price", formData.price)
  payload.append("bestSeller", formData.bestSeller)
  payload.append("sizes", JSON.stringify(formData.sizes))

  // Add image files
  if (image1) payload.append("image1", image1)
  if (image2) payload.append("image2", image2)
  if (image3) payload.append("image3", image3)
  if (image4) payload.append("image4", image4)

 
  try{
    const response=await axios.post(backendURL+"/api/product/add",payload,{headers:{token}})
    console.log(response,token)
    if(response.data.success){
      toast.success("product added successfully")
    }
  }
  catch(error){
    toast.error(error.message)
  }
    
  }
  return (
    <form className='flex flex-col w-full items-start' onSubmit={handleSubmit}>
        <h1 className='mb-10 text-bold'>Upload Images</h1>
        <div className='flex gap-10 w-full'>
          <label htmlFor='image1'>
            <img className='w-20 cursor-pointer' src={!image1?image:URL.createObjectURL(image1)} alt=''/>
            <input onChange={(e)=>setImage1(e.target.files[0])} type='file' id='image1' hidden/>
          </label>
          <label htmlFor='image2'>
            <img className='w-20 cursor-pointer' src={!image2?image:URL.createObjectURL(image2)} alt='' />
            <input onChange={(e)=>setImage2(e.target.files[0])} type='file' id='image2' hidden/>
          </label>
          <label htmlFor='image3'>
            <img className='w-20 cursor-pointer' src={!image3?image:URL.createObjectURL(image3)} alt='' />
            <input onChange={(e)=>setImage3(e.target.files[0])} type='file' id='image3' hidden/>
          </label>
          <label htmlFor='image4'>
            <img className='w-20 cursor-pointer' src={!image4?image:URL.createObjectURL(image1)} alt='' />
            <input onChange={(e)=>setImage4(e.target.files[0])} type='file' id='image4' hidden/>
          </label>
        </div>
        <div className='w-full'>
          <p className='my-2'>Product Name</p>
          <input className='w-full max-w-[500px] px-2 py-3' type="text" name="name" value={formData.name} onChange={handleChange} placeholder='Type here...'/>
        </div>
        <div className='w-full'>
          <p className='my-2'>Product Description</p>
          <input className='w-full max-w-[500px] px-2 py-3' type="text" name="description" value={formData.description} onChange={handleChange} placeholder='Write here...'/>
        </div>
        <div className='w-full flex flex-row gap-4'>
        <div>
          <p className='my-2'>category</p>
          <select className='w-full px-3 py-2'  name='category' onChange={handleChange}>
            <option value={'men'}>Men</option>
            <option value={'women'}>Women</option>
            <option value={'kids'}>Kids</option>
          </select>
        </div>
        <div>
          <p className='my-2'>Sub Category</p>
          <select className='w-full px-3 py-2' name='subCategory' onChange={handleChange}>
            <option value={'Topwear'}>TopWear</option>
            <option value={'Bottomwear'}>BottomWear</option>
            <option value={'Winterwear'}>WinterWear</option>
          </select>
        </div>
        <div>
          <p className='mt-3'>Price</p>
          <input className='w-full px-3 py-2' type='number' placeholder='25' name='price' onChange={handleChange}/>
        </div>
        
        </div>
        <div>
          <p className='my-2'>Product Sizes</p>
          <div className='flex gap-3'>
            <div onClick={()=>toggleSize("S")}><p className={`${formData.sizes.includes("S")?"bg-cyan-400":"bg-slate-200"} px-3 py-1 cursor-pointer`}>S</p></div>
            <div onClick={()=>toggleSize("M")}><p className={`${formData.sizes.includes("M")?"bg-cyan-400":"bg-slate-200"} px-3 py-1 cursor-pointer`}>M</p></div>
            <div onClick={()=>toggleSize("L")}><p className={`${formData.sizes.includes("L")?"bg-cyan-400":"bg-slate-200"} px-3 py-1 cursor-pointer`}>L</p></div>
            <div onClick={()=>toggleSize("XL")}><p className={`${formData.sizes.includes("XL")?"bg-cyan-400":"bg-slate-200"} px-3 py-1 cursor-pointer`}>Xl</p></div>
            <div onClick={()=>toggleSize("XXL")}><p className={`${formData.sizes.includes("XXL")?"bg-cyan-400":"bg-slate-200"} px-3 py-1 cursor-pointer`}>XXL</p></div>
          </div>
        </div>
        <div className='flex gap-2 mt-2'>
          <input type='checkbox' id='bestseller' name="bestSeller" checked={formData.bestSeller} onChange={(e)=>setFormData((prev)=>({...prev,bestSeller:e.target.checked}))}/>
          <label htmlFor='bestseller'>Add to best seller</label>
        </div>
      <button type='submit' className='w-28 px-3 py-2 mt-4 bg-black text-white cursor-pointer'>Add</button>
    </form>
  )
}

export default AddProduct