'use strict';
const db = require('../dbr');


const getAllClients = async (req, res, next) => {
    try {
        const clientsArray=[];
        var ref = db.ref("User");
       await ref.once("value").then(snap =>{
           snap.forEach(childsnap=>{
               const client=childsnap.val().user;
               client.id=childsnap.key;

              
            clientsArray.push(client);

           })            
        });
        res.send(clientsArray);
    } catch (error) {
        res.status(400).send(error.message);
    }
 }

 
 const getClient = async (req, res, next) => {
    try {
        var ref = db.ref("User");
        var id = ref.child(req.params.id);
        id.on("value", function(snapshot, id) {
            var data = snapshot.val();
            res.send(data);            
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
}
const deleteClient = async (req, res, next) => {
  try {
      var ref = db.ref("User");
      var id = ref.child(req.params.id);
     
      id.remove().then(function(snapshot) {
          console.log("Removed!");
          res.send("Client removed successfully !!");
        });
     
  } catch (error) {
      res.status(400).send(error.message);
  }
}
module.exports={getAllClients,getClient,deleteClient}
