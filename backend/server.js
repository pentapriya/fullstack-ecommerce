import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv/config'
import mongoConnect from './config/mongodb.js'
import cloudConnect from './config/cloudinary.js'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'

const app=express()
const port = process.env.PORT||4000

mongoConnect()
cloudConnect()

app.use(express.json())
app.use(cors())

// app.use('/',(req,res)=>{
//     res.send('middleware is displayed')
// })

app.use('/api/user',userRouter)
app.use('/api/product',productRouter)


app.listen(port,()=>{
    console.log('app is running at port',port)
})