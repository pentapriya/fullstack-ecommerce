import express from 'express'
import productController from '../controllers/productController.js'
import upload from '../middleware/multer.js'
import adminAuth from '../middleware/adminAuth.js'

const productRouter=express.Router()

productRouter.post('/add',adminAuth,upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),productController.addProduct)
productRouter.get('/singleProduct',productController.singleProduct)
productRouter.post('/edit',adminAuth,productController.editProduct)
productRouter.post('/delete',adminAuth,productController.deleteProduct)
productRouter.get('/allProducts',productController.listProducts)

export default productRouter