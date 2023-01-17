const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

const userRoutes = require('./routes/userRoutes');

app.use('/api/users', userRoutes);

app.listen(PORT, () => console.log(`Sever running on port ${PORT}`))