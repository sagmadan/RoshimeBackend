const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { config } = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const memoryRoutes = require('./routes/memoryRoutes');
const { verifyToken } = require('./middlewares/authMiddleware');

config(); // Load environment variables from .env

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/memories', verifyToken, memoryRoutes); // Protect memory routes with authentication

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    // Start the Server
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => console.error('MongoDB connection error:', err));

