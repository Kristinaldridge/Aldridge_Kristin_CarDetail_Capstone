import express from "express";
import dotenv from "dotenv";
import bookingsRoute from "./routes/bookings.mjs"
import cors from 'cors';
import mongoose from "mongoose";

dotenv.config();


const PORT = process.env.PORT || 5050;
const app = express();

app.use(express.json());
app.use (cors());


app.get('/', (req, res) => {
  res.send('Welcome to the API.');
});

app.use('/bookings', bookingsRoute);


mongoose.connect("mongodb+srv://kristinaldridge202:PEbkTw1g3Q646hEW@cluster13.wgztqop.mongodb.net/booking_data?retryWrites=true&w=majority&appName=Cluster13").then(()=>{
  console.log("mongoDB connected")
  
  app.listen(PORT, ()=>{
      console.log(`Server is running on port: http://localhost:${PORT}`)
  })
}).catch((error)=>{
  console.log(error)
});
