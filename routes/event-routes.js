const { Router } = require("express");
const express= require("express");
const router=express.Router();
const {
   addEvent, 
   getAllEvents, 
   getEvent, 
   deleteEvent,
   updateEvent 
} = require("../controllers/eventController");


router.post('/event', addEvent);
router.get('/events',getAllEvents);
router.get('/event/:id',getEvent);
router.delete('/event/:id',deleteEvent);
router.put('/event/:id',updateEvent);

module.exports = {
    routes: router
}