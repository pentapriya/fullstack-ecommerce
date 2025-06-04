import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'

const Collections = () => {
  const {products, search, showSearch}=useContext(ShopContext)
  const [filterProducts,setFilterProducts]=useState([])
  const [category,setCategory]=useState([])
  const [subCategory,setSubCategory]=useState([])
  const [sortType,setSortType]=useState('relevant')

const toggleCategory=(e)=>{
  if(category.includes(e.target.value)){
    setCategory(prev=>prev.filter((item)=>item !== e.target.value))
  }
  else{
    setCategory(prev=>[...prev,e.target.value])
  }
}

const toggleSubCategory=(e)=>{
  if(subCategory.includes(e.target.value)){
    setSubCategory(prev=>prev.filter((item)=>item !== e.target.value))
  }
  else{
    setSubCategory(prev=>[...prev,e.target.value])
  }
}

  useEffect(()=>{
    setFilterProducts(products)
  },[])

  
const applyFilter = () => {
  let productCopy = products.slice(); 

  if(showSearch && search){
    productCopy = productCopy.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
    
  }
  
  if (category.length > 0) {
    productCopy = productCopy.filter((item) => {
      return category.includes(item.category);
    });
  }
    
  if (subCategory.length > 0) {
    productCopy = productCopy.filter((item) => {
      return subCategory.includes(item.subCategory);
    });
  }
    
   setFilterProducts(productCopy);
  };
  
  const sortProduct=()=>{
    const fpCopy=filterProducts.slice()
    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a,b)=>a.price-b.price))
        break
      case 'high-low':
        setFilterProducts(fpCopy.sort((a,b)=>b.price-a.price))
        break
      default:
        applyFilter()
        break
    }
  }
 
useEffect(() => {
  setFilterProducts(products);
  applyFilter();
}, [products, category, subCategory,search,showSearch]);

useEffect(()=>{
  sortProduct()
},[sortType])
  return (
    <div className='flex flex-row gap-1 pt-10 border-t'>
        <div className='min-w-60'>
            <p className='flex items-center py-2 cursor-pointer gap-2 text-xl'>Filters</p>
             <div className=' border border-gray-300 mt-6 pl-5 py-3'>
                <p className='mb-3 text-sm font-medium'>Categories</p>
                <div className='flex flex-col text-sm gap-2 font-light text-gray-700'>
                    <p className='flex gap-2'>
                        <input type='checkbox' onChange={toggleCategory} className='w-3' value={'men'}/>Men
                    </p>
                    <p className='flex gap-2'>
                        <input type='checkbox' className='w-3' onChange={toggleCategory} value={'women'}/>Women
                    </p>
                    <p className='flex gap-2'>
                        <input type='checkbox' className='w-3' onChange={toggleCategory} value={'kids'}/>Kids
                    </p>
                </div>

             </div>
             <div className=' border border-gray-300 mt-6 pl-5 py-3'>
                <p className='mb-3 text-sm font-medium'>Sub-Categories</p>
                <div className='flex flex-col text-sm gap-2 font-light text-gray-700'>
                    <p className='flex gap-2'>
                        <input type='checkbox' className='w-3' value={'Topwear'} onChange={toggleSubCategory}/>TopWear
                    </p>
                    <p className='flex gap-2'>
                        <input type='checkbox' className='w-3' value={'Bottomwear'} onChange={toggleSubCategory}/>BottomWear
                    </p>
                    <p className='flex gap-2'>
                        <input type='checkbox' className='w-3' value={'Winterwear'} onChange={toggleSubCategory}/>WinterWear
                    </p>
                </div>

             </div>
        </div>
        <div className='flex-1'>
         <div className='flex justify-between text-base mb-5'>
          <Title text1={'ALL'} text2={'COLLECTIONS'}/>
          <select onChange={(e)=>setSortType(e.target.value)} className='border border-gray-400 text-sm py-3'>
            <option value='relevant'>Sort by : Relevant</option>
            <option value='high-low'>Sort by : High to Low</option>
            <option value='low-high'>Sort by : Low to High</option>
          </select>
         </div>
         <div  className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 gap-y-6 p-10'>
          {filterProducts.map((item,index)=>(
            <ProductItem key={index} Item={item} />
          ))}
         </div>
        </div>
    </div>
  )
}

export default Collections