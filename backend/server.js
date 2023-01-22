const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 8000;

//Connect to database
connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const userRoutes = require('./routes/userRoutes');
const ticketRoutes = require('./routes/ticketRoutes');

app.use('/api/users', userRoutes);
app.use('/api/tickets', ticketRoutes);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`))