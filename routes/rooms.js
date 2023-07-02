const express = require('express')

const roomController  = require('../controllers/room.js');

const router = express.Router();

router.get("/roomslist", roomController.roomsList);
/*router.post("/:hotelId", verifyAdmin, createRoom)
router.delete("/:id/:hotelId", verifyAdmin, deleteRoom)
router.get("/all",verifyAdmin, getRoom);
router.get('/:id', verifyAdmin, findRoom);
router.put('/:id', verifyAdmin, updateRoom);
router.put('/availablelity/:id',  updateRoomAvailablisty);
*/

module.exports =  router;