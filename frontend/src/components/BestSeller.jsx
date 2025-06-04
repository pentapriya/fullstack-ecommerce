import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title'

const BestSeller = () => {

    const {products}=useContext(ShopContext)
    const [bestProducts,setBestProducts]=useState([])

    useEffect(()=>{
        const bestProduct=products.filter((item)=>item.bestSeller)
        setBestProducts(bestProduct.slice(0,5))
    },[])

  return (
    <div className='my-10'>
          <div className='text-center py-8 text-3xl'>
            <Title text1={'BEST'} text2={'SELLERS'} />
            <p className='w-3/4 m-auto text-xs md-text-base text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis exercitationem minima eius aliquid rem aliquam ipsum, quaerat neque, expedita odio autem voluptas magnam omnis, illum asperiores molestias tempore doloribus!</p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6 p-10'>
            {bestProducts.map((item,index)=>(
                <ProductItem key={index} Item={item} />
            ))}
          </div>
        </div>
  )
}

export default BestSeller