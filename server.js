require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const authRoutes = require('./routes/auth')
const app = express();

app.use(bodyParser.json());

mongoose.connect(process.env.mongo_URI).then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));