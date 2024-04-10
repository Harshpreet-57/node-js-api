import express from 'express'
import regUser from './routes/regRoute.js';
import mongoose from 'mongoose';
import cors from 'cors';
const app = express();
app.use(express.json())
app.use("/api",regUser)


mongoose.connect("mongodb://localhost:27017").then(()=>{console.log("Connection established")})

app.listen(3000, () => {
    console.log("Running on port 3000")
})