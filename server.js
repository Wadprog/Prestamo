const express = require('express');
const mongoose = require('mongoose');
const connectDb = require('./config/db');
//Middleware initialaztion
const app = express();
app.use(express.json({extended:false}));

//Conecting to the database.
connectDb();

//Use the routes

app.use('/api/user',require('./routes/api/user'))
app.use('/api/client',require('./routes/api/client'))
//app.use('/api/profile',require('./routes/api/profile'))
app.use('/api/loans',require('./routes/api/loans'))
app.use('/api/auth',require('./routes/api/auth'))


var PORT = process.env.PORT || 5000;
app.listen(PORT, err => console.log(`Listening on port ${PORT}`));
