const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

dotenv.config();
const app = express();

// Middleware
app.use(express.json()); // Allows parsing of JSON request bodies
app.use(cors());        // Allows your frontend to talk to your backend
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB Cloud successfully!'))
  .catch((err) => {
    console.error('X Database connection error:');
    console.error(err.message);
  });

//routes
app.use('/api/auth', require('./routes/authRoutes'));

// Basic Route
app.get('/', (req, res) => {
    res.send('API is running...')
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

module.exports = app;