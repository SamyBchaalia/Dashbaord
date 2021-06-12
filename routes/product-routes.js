const express= require("express");
const router=express.Router();
const {
   addProduct,
   getAllProducts,
   getProduct,
   deleteProduct,
   updateProduct
}=require("../controllers/productController");
router.post('/product', addProduct);
router.get('/products',getAllProducts);
router.get('/product/:id',getProduct);
router.delete('/product/:id',deleteProduct)
router.put('./product/:id',updateProduct)

module.exports = {
    routes: router
}