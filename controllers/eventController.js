'use strict';

const db = require('../dbr');

const addEvent=async(req,res,next)=>{
    try {
        const data =req.body;
        console.log(req.body);
        var ref = db.ref("Events");
        var eventsRef=ref.push();
        eventsRef.set(data);
        res.send("successfuly added !");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getAllEvents = async (req, res, next) => {
    try {
        const eventsArray=[];
        var ref = db.ref("Events");
       await ref.once("value").then(snap =>{
           snap.forEach(childsnap=>{
               const event=childsnap.val();
               event.id=childsnap.key;
            eventsArray.push(event);

           })            
        });
        res.send(eventsArray);
    } catch (error) {
        res.status(400).send(error.message);
    }
 }


    const getEvent = async (req, res, next) => {
      try {
          var ref = db.ref("Events");
          var id = ref.child(req.params.id);
          id.on("value", function(snapshot, id) {
              var data = snapshot.val();
              res.send(data);            
          });
      } catch (error) {
          res.status(400).send(error.message);
      }
  }
  const deleteEvent = async (req, res, next) => {
    try {
        var ref = db.ref("Events");
        var id = ref.child(req.params.id);
       
        id.remove().then(function(snapshot) {
            console.log("Removed!");
            res.send("Event removed successfully !!");
          });
       
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updateEvent = async (req, res, next) => {
    try {
        var ref = db.ref("Events");
        var id = ref.child(req.params.id);
        const data = req.body;
        console.log(req.body);
        id.update(data);
        res.send('Event record updated successfuly');        
    } catch (error) {
        res.status(400).send(error.message);
    }
}
    
module.exports={addEvent,getAllEvents,getEvent,deleteEvent,updateEvent}