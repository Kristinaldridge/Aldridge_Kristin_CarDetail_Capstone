import express from "express";
const router = express.Router();
import pkg from '../models/bookingModel.js';
const { Booking } = pkg

router.get('/', async(request, response)=>{

  try{
    // const movies = await db.collection('movies').find({})
    const newBooking = await Booking.find({}).limit(1)
    console.log(newBooking)
   return response.status(200).json(newBooking)
  } catch(error){
    console.log(error)
  }
});

export default router;