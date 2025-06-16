import jwt from 'jsonwebtoken'

const adminAuth=(req,res,next)=>{
   try{
     const {token}=req.headers

    if(!token){
        res.json({success:false,message:"token not provided"})
    }

    const adminToken=jwt.verify(token,process.env.SECRET_KEY)

    if(adminToken===process.env.ADMIN_EMAIL+process.env.ADMIN_PASSWORD){
        next()
    }
    else{
        res.json({success:false,message:"password or email mismatch"})
    }
   }
    catch(error){
        res.json({success:false,message:error.message})
    }
   
}

export default adminAuth