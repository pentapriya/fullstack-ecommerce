import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const ProductItem = ({Item}) => {
    const {currency}=useContext(ShopContext)

  return (
    <Link className='text-gray-700 cursor-pointer' to={`/products/${Item._id}`}>
        <div className='overflow-hidden w-full h-[250px]'>
            <img className='hover-scale-110 transition ease-in-out w-full' src={Item.image[0]} alt='' />
        </div>
        <p className='pt-3 pb-1 text-sm'>{Item.name}</p>
        <p className='text-sm font-medium'>{currency} {Item.price}</p>
    </Link>
  )
}

export default ProductItem