const { Router } = require("express");
const express= require("express");
const router=express.Router();
const {
   addSouk, getAllSouks, getSouk, deleteSouk,updateSouk
}=require("../controllers/soukController");
router.post('/souk/:id', addSouk);
router.get('./souks',getAllSouks);
router.get('./souk/:id',getSouk);
router.delete('./souk/:id',deleteSouk);
router.put('./souk/:id',updateSouk);

module.exports = {
    routes: router
}