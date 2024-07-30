import express from 'express';
import { ObjectId } from 'mongodb';
import Booking from '../models/bookingModel.js';

const router = express.Router();
const uri = process.env.ATLAS_URI || "mongodb+srv://kristinaldridge202:PEbkTw1g3Q646hEW@cluster13.wgztqop.mongodb.net/booking_data?retryWrites=true&w=majority&appName=Cluster13";
// const client = new MongoClient(uri, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// let db;
// client.connect().then(() => {
//   db = client.db('bookings');
//   console.log('Connected to MongoDB');
// }).catch(err => console.error('Failed to connect to MongoDB', err));

// await db.collection('bookings').find({}).toArray();

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
    // await db.collection('bookings').insertOne(booking);
    // res.status(201).json(result.ops[0]);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE 
router.delete('/:id', async (req, res) => {
  const id = req.params.id;

  try {
    
    const result = await db.collection('bookings').deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount > 0) {
      res.json({ message: 'Booking deleted' });
    } else {
      res.status(404).json({ message: 'Booking not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT
router.put('/:id', async (req, res) => {
  const id = req.params.id;
  const updates = req.body;

  try {
    // Convert id to ObjectId
    await Booking.findByIdAndUpdate(id, updates)
    return res.status(200).send({message: 'Bookings updated successfully'})
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;