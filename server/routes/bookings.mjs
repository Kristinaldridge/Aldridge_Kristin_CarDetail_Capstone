import express from 'express';
import { ObjectId } from 'mongodb';
import Booking from '../models/bookingModel.js';

const router = express.Router();
const uri = process.env.ATLAS_URI || "mongodb+srv://kristinaldridge202:PEbkTw1g3Q646hEW@cluster13.wgztqop.mongodb.net/booking_data?retryWrites=true&w=majority&appName=Cluster13";


// GET 
router.get('/', async (req, res) => {
  try {
    const bookings = await Booking.find({})
    res.status(200).json({
      count:bookings.length,
      data: bookings
    })
    // res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST 
router.post('/', async (req, res) => {
  const booking = {
    name: req.body.name,
    phone: req.body.phone,
    service: req.body.service,
    date: req.body.date,
    time: req.body.time
  };

  try {
    const result = Booking.create(booking)
   
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE 
router.delete('/:id', async (req, res) => {
  try {
      await Booking.findByIdAndDelete(req.params.id);

   
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    
    await Booking.findByIdAndUpdate(id, updates)
    return res.status(200).send({message: 'Bookings updated successfully'})
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;