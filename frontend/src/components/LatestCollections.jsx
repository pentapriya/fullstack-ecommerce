import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title'
import ProductItem from './ProductItem'

const LatestCollections = () => {

    const {products}=useContext(ShopContext)
    const [latestProducts,setLatestProducts]=useState([])

   
useEffect(() => {
    setLatestProducts(products.slice(0, 5));
}, [products]);
    
    
    return (
        <div className='my-10'>
          <div className='text-center py-8 text-3xl'>
            <Title text1={'LATEST'} text2={'COLLECTIONS'} />
            <p className='w-3/4 m-auto text-xs md-text-base text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto perspiciatis exercitationem minima eius aliquid rem aliquam ipsum, quaerat neque, expedita odio autem voluptas magnam omnis, illum asperiores molestias tempore doloribus!</p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6 p-10'>
            {latestProducts.map((item,index)=>(
                <ProductItem key={index} Item={item} />
            ))}
          </div>
        </div>
      );
}

export default LatestCollections