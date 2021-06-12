const { Router } = require("express");
const express= require("express");
const router=express.Router();
const {
    getAllClients, 
    getClient, 
    deleteClient,
 } = require("../controllers/clientController");

 
router.get('/clients',getAllClients);
router.get('/client/:id',getClient);
router.delete('/client/:id',deleteClient);


module.exports = {
    routes: router
}
 