const db = require('../dbr');

const addSouk=async(req,res,next)=>{
 try{

const data =req.body;
console.log(req.body);
var ref = db.ref("Souk");
var eventRef = ref.child(req.params.id);
eventRef.set(data);
res.send("successfully!!!");
    }catch (error) {
    res.status(400).send(error.message);
    }
}

const getAllSouks = async (req, res, next) => {
    try {
        var ref = db.ref("Souk");
        ref.orderByKey().on("value", function(snapshot) {
            var data = snapshot.val();
            res.send(data);
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
 }


    const getSouk = async (req, res, next) => {
      try {
          var ref = db.ref("Souk");
          var id = ref.child(req.params.id);
          id.on("value", function(snapshot, id) {
              var data = snapshot.val();
              res.send(data);
             
          });
      } catch (error) {
          res.status(400).send(error.message);
      }
  }
  const deleteSouk = async (req, res, next) => {
    try {
        var ref = db.ref("Souk");
        var id = ref.child(req.params.id);
       
        id.remove().then(function(snapshot) {
            console.log("Removed!");
            res.send("Souk removed successfully !!");
          });
       
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateSouk = async (req, res, next) => {
    try {
        var ref = db.ref("Souk");
        var id = ref.child(req.params.id);
        const data = req.body;
        console.log(req.body);
        id.update(data);
        res.send('Souk record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
    
module.exports={addSouk,getAllSouks,getSouk,deleteSouk,updateSouk}