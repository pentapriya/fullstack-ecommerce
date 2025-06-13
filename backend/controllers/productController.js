import productModal from "../models/productModal.js"
import { v2 as cloudinary } from "cloudinary"

const addProduct=async(req,res)=>{
    try{
        const {name,description,price,category,subCategory,sizes,date,bestSeller}=req.body
        const image1=req.files.image1 && req.files.image1[0] 
        const image2=req.files.image2 && req.files.image2[0]
        const image3=req.files.image3 && req.files.image3[0]
        const image4=req.files.image4 && req.files.image4[0]

        const images=[image1,image2,image3,image4].filter((item)=>item!==undefined)

        let imagesurl=await Promise.all(
            images.map(async (item)=>{
                let result=await cloudinary.uploader.upload(item.path,{resource_type:'image'})
                return result.secure_url
            })
        )

        console.log('images',images)
        console.log('imageurl',imagesurl)

        const productData={
            name,
            description,
            price:Number(price),
            image:imagesurl,
            category,
            subCategory,
            sizes:JSON.parse(sizes),
            date:Date.now(),
            bestSeller:bestSeller==='true'?true:false
        }

        const newProduct=new productModal(productData)

        await newProduct.save()
        res.json({success:true,message:"product is saved"})
    }
    catch(error){
        res.json({success:false,message:error.message})
    }
}

const listProducts=async(req,res)=>{

}

const singleProduct=async(req,res)=>{

}

const editProduct=async(req,res)=>{

}

const deleteProduct=async(req,res)=>{

}

export default {listProducts,addProduct,deleteProduct,editProduct,singleProduct}
