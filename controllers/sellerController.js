'use strict';

const db = require('../dbr');



const addSeller = async (req, res, next) => {
    try {
        const data =req.body;
        console.log(req.body);
        var ref = db.ref("sellers");
        var sellersRef=ref.push();
        sellersRef.set(data);
        res.send("successfuly added !");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllSellers = async (req, res, next) => {
    try {
        const sellersArray=[];
        var ref = db.ref("sellers");
       await ref.once("value").then(snap =>{
           snap.forEach(childsnap=>{
               const seller=childsnap.val();
               seller.id=childsnap.key;
               sellersArray.push(seller);

           })
         
            
        });
        res.send(sellersArray);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getSeller = async (req, res, next) => {
    try {
        var ref = db.ref("sellers");
        var id = ref.child(req.params.id);
        id.on("value", function(snapshot, id) {
            var data = snapshot.val();
            console.log("name = "+data.storeName);
            console.log("description = "+data.storeDescription);
            res.send(data);
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateSeller = async (req, res, next) => {
    try {
        var ref = db.ref("sellers");
        var id = ref.child(req.params.id);
        const data = req.body;
        console.log(req.body);
        id.update(data);
        res.send('Seller record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteSeller = async (req, res, next) => {
    try {
        var ref = db.ref("sellers");
        var id = ref.child(req.params.id);
       
        id.remove().then(function(snapshot) {
            console.log(" seller Removed!");
            res.send("seller removed successfully !!");
          });
       
    } catch (error) {
        res.status(400).send(error.message);
    }
}


module.exports = {
    addSeller,
    getAllSellers,
    getSeller,
    updateSeller,
    deleteSeller,
    
}