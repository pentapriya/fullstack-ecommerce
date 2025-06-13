import express from 'express'
import productController from '../controllers/productController.js'
import upload from '../middleware/multer.js'

const productRouter=express.Router()

productRouter.post('/add',upload.fields([{name:'image1',maxCount:1},{name:'image2',maxCount:1},{name:'image3',maxCount:1},{name:'image4',maxCount:1}]),productController.addProduct)
productRouter.get('/singleProduct',productController.singleProduct)
productRouter.post('/edit',productController.editProduct)
productRouter.delete('/delete',productController.deleteProduct)
productRouter.get('/allProducts',productController.listProducts)

export default productRouter