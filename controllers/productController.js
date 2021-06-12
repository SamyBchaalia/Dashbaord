const { error } = require('@angular/compiler/src/util');
const db = require('../dbr');


const addProduct=async(req,res,next)=>{
 try{

const data =req.body;
console.log(req.body);
var ref = db.ref("shop/"+req.body.shopid);
var ProductRef = ref.child(req.params.product);
ProductRef.set(data);
res.send("successfully!!!");
if(error){
    res.status()
}
    }catch (error) {
    res.status(400).send(error.message);
    }
}

const getAllProducts = async (req, res, next) => {
    try {
        const ProductsArray=[];
        var ref = db.ref("shop/"+req.body.shopid);
       await ref.once("value").then(snap =>{
           snap.forEach(childsnap=>{
               const Product=childsnap.val();
               Product.id=childsnap.key;
               ProductsArray.push(Product);

           })
         
            
        });
        res.send(ProductsArray);
    } catch (error) {
        res.status(400).send(error.message);
    }
 }


    const getProduct = async (req, res, next) => {
      try {
          var ref = db.ref("shop/"+req.body.shopid);
          var id = ref.child(req.params.id);
          id.on("value", function(snapshot, id) {
              var data = snapshot.val();
              res.send(data);
             
          });
      } catch (error) {
          res.status(400).send(error.message);
      }
  }
  const deleteProduct = async (req, res, next) => {
    try {
        var ref = db.ref("shop/"+req.body.shopid);
        var id = ref.child(req.params.id);
       
        id.remove().then(function(snapshot) {
            console.log(" Product Removed!");
            res.send("Product removed successfully !!");
          });
       
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        var ref =db.ref("shop/"+req.body.shopid);
        var id = ref.child(req.params.id);
        const data = req.body;
        console.log(req.body);
        id.update(data);
        res.send('Product record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports={addProduct,getAllProducts,getProduct,deleteProduct,updateProduct}