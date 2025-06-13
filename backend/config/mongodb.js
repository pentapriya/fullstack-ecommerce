import mongoose from 'mongoose'

const mongoConnect=async()=>{
    mongoose.connection.on('connected',()=>{
        console.log("mongo db is connected")
    })
    await mongoose.connect(`${process.env.MONGODB_URL}/e-commerce`)

}

export default mongoConnect