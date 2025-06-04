import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'
import Title from './Title'

const RelatedProducts = ({category,subCategory}) => {
    const {products}=useContext(ShopContext)
    const [related,setRelated]=useState([])

    useEffect(()=>{
        if(products.length>0){
            let productsCopy=products.slice()
            productsCopy=productsCopy.filter((item)=>category===item.category)
            productsCopy=productsCopy.filter((item)=>subCategory===item.subCategory)
            setRelated(productsCopy.slice(0,5))
        }
    },[products, category, subCategory])
  return (
    <div className='my-24'>
        <div className='text-center text-3xl py-2'>
            <Title text1={'Related'} text2={'Products'}/>
        </div>
        <div className='grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-5'>
        {related.map((item,index)=>(
            <div>
                <ProductItem  key={index} Item={item}/>
            </div>
        ))}
        </div>
    </div>
  )
}

export default RelatedProducts