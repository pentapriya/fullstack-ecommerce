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
    try{
        const products=await productModal.find({})
        res.json({success:true,message:"product is saved",products})
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

const singleProduct=async(req,res)=>{
    try{
        const {productId}=req.body
        const product=await productModal.findById(productId)
        res.json({success:true,message:"product is fetched",product})
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

const editProduct=async(req,res)=>{
     try{
        const { productId, name, description, price, category, subCategory, sizes, bestSeller } = req.body;

        // Handle new images if provided
        const image1 = req.files?.image1?.[0];
        const image2 = req.files?.image2?.[0];
        const image3 = req.files?.image3?.[0];
        const image4 = req.files?.image4?.[0];

        
        const images = [image1, image2, image3, image4].filter(item => item !== undefined);

        let imagesurl = [];
        if (images.length > 0) {
        imagesurl = await Promise.all(
        images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
        return result.secure_url;
        })
    );
    }

    const updatedFields = {
        ...(name && { name }),
        ...(description && { description }),
        ...(price && { price: Number(price) }),
         ...(category && { category }),
        ...(subCategory && { subCategory }),
        ...(sizes && { sizes: JSON.parse(sizes) }),
        ...(typeof bestSeller !== 'undefined' && { bestSeller: bestSeller === 'true' }),
         ...(imagesurl.length > 0 && { image: imagesurl }),
    };


        const updatedProduct = await productModal.findByIdAndUpdate(productId, updatedFields, { new: true });
        res.json({success:true,message:"product is updated",updatedProduct})
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

const deleteProduct=async(req,res)=>{
     try{
        const {productId}=req.body
        const product=await productModal.findByIdAndDelete(productId)
        res.json({success:true,message:"product is deleted",product})
    }catch(error){
        res.json({success:false,message:error.message})
    }
}

export default {listProducts,addProduct,deleteProduct,editProduct,singleProduct}
