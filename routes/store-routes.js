const express= require("express");
const router=express.Router();
const {
   addStore,
   getAllStores,
   getStore,
   deleteStore,
   updateStore
}=require("../controllers/storeController");
router.post('/store/:product', addStore);
router.get('/stores',getAllStores);
router.get('/store/:id',getStore);
router.delete('/store/:id',deleteStore)
router.put('./store/:id',updateStore)

module.exports = {
    routes: router
}