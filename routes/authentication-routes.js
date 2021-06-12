const { Router } = require("express");
const express= require("express");
const router=express.Router();
const {
   authenticationShop
 } = require("../controllers/authenticationController");

 
router.post('/login',authenticationShop);



module.exports = {
    routes: router
}
 