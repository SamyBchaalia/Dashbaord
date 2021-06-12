'use strict';

const firebase = require('../db');
const db = require('../dbr');
const Shop = require('../models/shop');
const Comment= require('../models/comment')
const { app } = require('firebase-admin');


const authenticationShop = async (req, res, next) => {
    try {
        var toReturn = null;
        var ref = db.ref("shops");
       await ref.once("value").then(snap =>{
           snap.forEach(childsnap=>{
               const shop=childsnap.val();
               if(shop.email===req.body.email&&shop.password===req.body.password)
               {
                    shop.id=childsnap.key;
                    toReturn=shop.id;
               }

           })
        });
        
        res.send([{id:toReturn}]);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const authenticationAdmin=async (req,res,next)=> {
    try {
        var toReturn=null;
        var ref = db.ref("admins")
        await ref.once("value").then(snap=>{
            snap.forEach(childsnap=>{
                const admin = childsnap.val();
                if(admin.email===req.body.email&&admin.password===req.body.password)
                {
                    toReturn=1;
                }
            })
        });
            res.send({toReturn});
    
    }
    catch(error){
        res.status(400).send(error.message);
    }

}
module.exports = {
    authenticationShop,authenticationAdmin
}
