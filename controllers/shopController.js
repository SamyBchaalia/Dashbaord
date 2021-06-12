'use strict';

const firebase = require('../db');
const db = require('../dbr');
const Shop = require('../models/shop');
const Comment= require('../models/comment')
const { app } = require('firebase-admin');
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nawresfatma20@gmail.com",
    pass: "isamm2020",
  },
});

const firestore = firebase.firestore();



const addShop = async (req, res, next) => {
    try {
        const data =req.body;
        console.log(req.body);
        var ref = db.ref("shops");
        var shopsRef=ref.push();
        shopsRef.set(data);
        res.send("successfuly added !");
        let mailOptions = {
            from: "nawresfatma20@gmail.com",
            to: req.body.email,
            subject: "Authentication Access to SeeLemdina",
            text:
              "Dear owner of" +
              req.body.storeName +
              "To login in your Account Please use this username :" +
              req.body.email +
              "  and password :" +
              req.body.password,
          };
          console.log(mailOptions);
          transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
              console.log(error);
            } else {
              console.log("Email sent: " + info.response);
            }
          });
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllShops = async (req, res, next) => {
    try {
        const shopsArray=[];
        var ref = db.ref("shops");
       await ref.once("value").then(snap =>{
           snap.forEach(childsnap=>{
               const shop=childsnap.val();
               shop.id=childsnap.key;
               console.log(childsnap.val);
               shopsArray.push(shop);

           })
         
            
        });
        res.send(shopsArray);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getShop = async (req, res, next) => {
    try {
        var ref = db.ref("shops");
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

const updateShop = async (req, res, next) => {
    try {
        var ref = db.ref("shops");
        var id = ref.child(req.body.id);
        const data = req.body;
        id.update(data);
        res.send(data);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteShop = async (req, res, next) => {
    try {
        var ref = db.ref("shops");
        var id = ref.child(req.params.id);
       
        id.remove().then(function(snapshot) {
            console.log(" shop Removed!");
            res.send("shop removed successfully !!");
          });
       
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const getAllShopcomments = async (req, res, next) => {
    try {
        const comments = await firestore.collection('Shop').doc(req.params.id).collection('comment');
        const data = await comments.get();
        const commentsArray = [];
      
            data.forEach(doc => {
                const comment = new Comment(
                    doc.id,
                    doc.data().description,
                    doc.data().image,
                    doc.data().name,
                    doc.data().rate,
                    doc.data().status
                );
                commentsArray.push(comment);
            });
            res.send(commentsArray);
        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const addShopComment = async (req, res, next) => {
    try {
        const data = {name:req.body.name,description:req.body.description,image:req.body.image,rate:req.body.rate};
        await firestore.collection('Shop').doc(req.params.id).collection('comment').doc().set(data);
        res.send('Record saved successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const updateShopComment = async (req, res, next) => {
    try {
        const id = req.params.id;
        const idComment = req.params.idcomment;
        const data = req.body;
        const Comment =  await firestore.collection('Shop').doc(id).collection('comment').doc(idComment);
        await Comment.update(data);
        res.send('Comment record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const deleteShopComment = async (req, res, next) => {
    try {
        const id = req.params.id;
        const idComment= req.params.idcomment
        await firestore.collection('Shop').doc(id).collection('comment').doc(idComment).delete();
        res.send('Record deleted successfuly');
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports = {
    addShop,
    getAllShops,
    getShop,
    updateShop,
    deleteShop,
    getAllShopcomments,addShopComment,updateShopComment,
    deleteShopComment
    
}