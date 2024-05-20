require('dotenv').config({path:'src/.env'})
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const authRoutes = require('./routes/auth');
const departmentRoutes = require('./routes/departments');
const projectRoutes = require('./routes/projects');
const moduleRoutes = require('./routes/modules');
const taskRoutes = require('./routes/tasks');
const timeLogRoutes = require('./routes/time-logs');

const cors = require("cors");
//connect to mongoDB
const MONGODB_URI = process.env.MONGODB_URI
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json())


mongoose.connect(MONGODB_URI).then(()=>console.log('Connected to MongoDB')).catch((err)=>console.log(err))

app.use('/api/auth',authRoutes);

app.use('/api/departments',departmentRoutes);

app.use('/api/projects',projectRoutes);

app.use('/api/modules',moduleRoutes);

app.use('/api/tasks',taskRoutes);

app.use('/api/time-logs',timeLogRoutes);

app.get("/",(req,res)=>{
    res.send("Backend Server is running")
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})