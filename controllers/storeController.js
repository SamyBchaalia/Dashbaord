const db = require('../dbr');


const addStore=async(req,res,next)=>{
 try{

const data =req.body;
console.log(req.body);
var ref = db.ref("store");
var storeRef = ref.child(req.params.product);
storeRef.set(data);
res.send("successfully!!!");
    }catch (error) {
    res.status(400).send(error.message);
    }
}

const getAllStores = async (req, res, next) => {
    try {
        const storesArray=[];
        var ref = db.ref("store");
       await ref.once("value").then(snap =>{
           snap.forEach(childsnap=>{
               const store=childsnap.val();
               store.id=childsnap.key;
            storesArray.push(store);

           })
         
            
        });
        res.send(storesArray);
    } catch (error) {
        res.status(400).send(error.message);
    }
 }


    const getStore = async (req, res, next) => {
      try {
          var ref = db.ref("store");
          var id = ref.child(req.params.id);
          id.on("value", function(snapshot, id) {
              var data = snapshot.val();
              res.send(data);
             
          });
      } catch (error) {
          res.status(400).send(error.message);
      }
  }
  const deleteStore = async (req, res, next) => {
    try {
        var ref = db.ref("store");
        var id = ref.child(req.params.id);
       
        id.remove().then(function(snapshot) {
            console.log(" store Removed!");
            res.send("store removed successfully !!");
          });
       
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateStore = async (req, res, next) => {
    try {
        var ref = db.ref("store");
        var id = ref.child(req.params.id);
        const data = req.body;
        console.log(req.body);
        id.update(data);
        res.send('Store record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
module.exports={addStore,getAllStores,getStore,deleteStore,updateStore}