import React, { useContext,useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title'
import bin from '../assets/bin.png'
import TotalCart from '../components/TotalCart'
import EmptyCart from '../components/EmptyCart'
const Cart = () => {
  const {products,cartItems,currency,updateQuantity,navigate}=useContext(ShopContext)

  const [cartData,setCartData]=useState([])

  useEffect(()=>{
    const tempData=[]
    for(const items in cartItems){
      for(const item in cartItems[items]){
        if(cartItems[items][item]>0){
          tempData.push({
            _id:items,
            size:item,
            quantity:cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  },[cartItems])
  console.log(cartData)
  return (
    cartData.length>0?<div className='border-t pt-14'>
      <div className="text-2xl mb-13 text-center">
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>
      <div>
        {cartData.map((item,index)=>{
          const productData=products.find((product)=>item._id===product._id)
          return(
            <div key={index} className="py-4 border-t border-b text-gray700 grid grid-cols-[4fr_0.5fr_0.5fr] items-center gap-4">
              <div className="flex items-start gap-6">
                <img className='w-16' src={productData.image[0]} alt=''/>
                <div>
                  <p className='text-xs font-medium'>{productData.name}</p>
                <div className='flex items-center gap-5 mt-2'>
                  <p>{currency}{productData.price}</p>
                  <p className='px-2 border bg-slate-50'>{item.size}</p>
                </div>
                </div>
              </div>
              <input onChange={(e)=>{e.target.value===''||e.target.value==='0'?null:updateQuantity(item._id,item.size,Number(e.target.value))}} type='number' className='border max-w-10 px-1 py-1' min={1} defaultValue={item.quantity}/>
              <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-6 cursor-pointer' src={bin} alt='' />
            </div>
          )
        })}
      </div>
      
      <div className="w-full">
        <div className="flex flex-col justify-end my-20 ml-200 mr-20">
          <TotalCart />
          <div className="w-full text-end"></div>
          <button onClick={()=>navigate('/placeOrder')} className='bg-black text-white text-sm py-3 px-8 my-8 w-[70%] mx-20 cursor-pointer'>PROCEED TO CHECKOUT</button>
        </div>
        
      </div>
    </div>:<div>
      <EmptyCart />
    </div>

  )
}

export default Cart