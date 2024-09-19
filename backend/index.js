import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose';
import cors from 'cors'


import bookRoute from './route/book.route.js'
import userRoute from './route/user.route.js'

const app = express()

dotenv.config();

// app.use(cors());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    methods:['GET', 'POST', 'PUT', 'DELETE' ],
  }));
app.use(express.json());

const PORT=process.env.PORT || 4000;
const URI=process.env.MongoDBURI;

//connect to mongodb
try {
    mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log("Connected to MongoDB")
    
} catch (error) {
    console.log("Error: ", error);
}

//defining route
app.use('/book', bookRoute)
app.use('/user', userRoute);



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})