import userModel from "../models/userModel.js"
import bcrypt from 'bcrypt'
import validator from 'validator'
import jwt from 'jsonwebtoken'

const secretToken=(id)=>{
   return jwt.sign({id},process.env.SECRET_KEY)
}
const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body

    const user=await userModel.findOne({email})
    if(!user){
         res.json({success:false,message:'User doesnt exist.'})
    }

    const passwordMatch=await bcrypt.compare(password,user.password)

    if(passwordMatch){
        const token=secretToken(user.id)
        res.json({success:true,token})
    }
    else{
         res.json({success:false,message:'Password is wrong.Please provide correct password.'})
    }
    }
    catch(error){
        res.json({success:false,message:error.message})
    }

}

const registerUser=async(req,res)=>{
    try{
        const {name,email,password}=req.body

    const exists=await userModel.findOne({email})
    if(exists){
        res.json({success:false,message:'Email already exists.'})
    }

    if(!validator.isEmail(email)){
        res.json({success:false,message:'Please provide valid email.'})
    }

    if(password.length<8){
        res.json({success:false,message:'Please provide strong password.'})
    }

    const salt=await bcrypt.genSalt(10)
    const hashedPassword=await bcrypt.hash(password,salt)

    const newUser=new userModel({
        name,
        email,
        password:hashedPassword
    })

    const user=await newUser.save()

    const token=secretToken(user._id)
    res.status(201).json({success:true,token})

    }
    catch(error){
        res.json({success:false,message:error.message})
    }

}

const adminLogin=async(req,res)=>{

}

export default {loginUser,registerUser,adminLogin}