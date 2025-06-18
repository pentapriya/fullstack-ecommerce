import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import star from '../assets/star.png'
import stardull from '../assets/stardull.png'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
  const {productid}=useParams()
  const {products, currency, addToCart}=useContext(ShopContext)
  const [productData,setProductData]=useState(false)
  const [image,setImage]=useState('')
  const [size,setSize]=useState('')

  const applyFilter=async()=>{
    products.map((item)=>{
      if(item._id===productid){
        setProductData(item)
        setImage(item.image[0])
        return null
      }
    })
  }

  useEffect(()=>{
    applyFilter()
  },[productid])

  return productData ? (
    <div className=' min-h-screen border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      <div className="flex gap-6 flex-row">
        <div className="flex-1 flex flex-row gap-4  h-[100vh]">
          <div className="flex flex-col gap-2 w-[20%] h-full">
            {productData.image.map((item,index)=>(
              <img onClick={()=>setImage(item)} src={item} key={index} alt='' className='w-full flex-shrink-0 cursor-pointer h-24 border rounded'/>
              
            ))}
          </div>
          <div className='w-full'>
            <img src={image} alt='' className='w-[80%] h-[75vh]'/>
          </div>
        </div>
        <div className="flex-1">
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={star} alt="" className="w-3 5" />
            <img src={star} alt="" className="w-3 5" />
            <img src={star} alt="" className="w-3 5" />
            <img src={star} alt="" className="w-3 5" />
            <img src={stardull} alt="" className="w-3 5" />
            <p className='pl-2'>{122}</p>
          </div>
          <p className='text-3xl font-medium mt-5'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-500 md:w-4/5'>{productData.description}</p>
          <div className='flex flex-col gap-4 my-8'>
            <p>Select Sizes</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border bg-gray-100 py-2 px-4 ${item===size?'border-orange-500':''}`} key={index}>{item}</button>
              ))}
              </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white active:bg-gray-700 text-sm cursor-pointer w-25 h-10'>Add To Cart</button>
          <hr className='sm:w-4/5 mt-8'/>
          <div className='flex flex-col text-gray-500 text-sm mt-5 gap-1'>
            <p>100% original product</p>
            <p>Cash on delivery is available on this product</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex">
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews(122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-5 py-4 text-sm text-gray-500'>
          <p>E-commerce is essentially online shopping, encompassing all the activities involved in buying and selling products or services online. </p>
          <p>E-commerce is the buying and selling of goods and services over the internet. It involves the online exchange of products or services between businesses, consumers, or both, facilitated by websites, mobile apps, or online marketplaces. </p>
        </div>
        
      </div>
        <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ):<div className='opacity-0'></div>
}

export default Product