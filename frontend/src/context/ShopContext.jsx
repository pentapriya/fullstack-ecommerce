import React, { createContext, useEffect, useReducer, useState } from 'react'
import { products } from '../assets/assets'
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

export const ShopContext=createContext()

const ShopContextProvider = (props) => {
    const currency='$'
    const delivery_fee=10
    const [search,setSearch]=useState('')
    const [showSearch,setShowSearch]=useState(false)
    const [cartItems,setCartItems]=useState({})
    const navigate=useNavigate()

   

    let cartProducts=structuredClone(cartItems)

    const addToCart=async(itemId,size)=>{
      if(!size){
        toast.error('Select Product Size')
        return
      }
      if(cartProducts[itemId]){
        if(cartProducts[itemId][size]){
        cartProducts[itemId][size]+=1
      }
        else{
          cartProducts[itemId][size]=1
        }
      }
      else{
        cartProducts[itemId]={}
        cartProducts[itemId][size]=1
      }
      setCartItems(cartProducts)
    }

    const getCartCount=()=>{
      let totalCount=0
      for(const items in cartItems){
        for(const item in cartItems[items]){
          try{
            if(cartItems[items][item]>0){
            totalCount+=cartItems[items][item]
            }
          }
          catch(error){

          }
        }
      }
      return totalCount
    }

    const updateQuantity=async(itemId,size,quantity)=>{
      let cartData=structuredClone(cartItems)

      cartData[itemId][size]=quantity
      setCartItems(cartData)
    }

    const getCartAmount=()=>{
      let totalAmount=0
      for(const items in cartItems){
        let itemInfo=products.find((product)=>product._id===items)

        for(const item in cartItems[items]){
          try{
            if(cartItems[items][item]>0){
            totalAmount+=itemInfo.price*cartItems[items][item]
            }
          }
          catch(error){

          }
        }
      }
      return totalAmount
    }

    const value={
      products,currency,delivery_fee,navigate,search,setSearch,showSearch,setShowSearch,addToCart,getCartCount,cartItems,updateQuantity,getCartAmount
    }
    
  return (
    <ShopContext.Provider value={value}>
        {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider