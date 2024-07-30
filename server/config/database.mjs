// import { MongoClient, ServerApiVersion } from "mongodb";
// import dotenv from 'dotenv';
// dotenv.config();


// const uri = process.env.ATLAS_URI || "";
// if (!uri.startsWith('mongodb://') && !uri.startsWith('mongodb+srv://')) {
//   throw new Error('Invalid MongoDB URI');
// }

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function connectMongoDB() {
//   try {
    
//     await client.connect();
   
//     await client.db("booking_data").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } catch (err) {
//     console.error('Error connecting to MongoDB:', err);
//   }
// }

// connectMongoDB();

// const db = client.db("bookings");

// export default db;